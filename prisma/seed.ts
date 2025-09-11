import { PrismaClient } from '../src/generated/prisma'
import { products } from './data'
const prisma = new PrismaClient()
type DynamicItemsType = {
  [K in 'category' | 'brand']: Map<string, string>
}
const dynamicItems: DynamicItemsType = {
  category: new Map(),
  brand: new Map()
}
const validKeys: Array<keyof DynamicItemsType> = ['category', 'brand']

function getUniqueData (): {[key:string]: string[]} {
    const categories = new Set()
    const brands = new Set()
    for (const prod of products) {
        categories.add(prod.category)
        brands.add(prod.brand ?? 'No Name')
    }

    return {
        category: Array.from(categories) as string[],
        brand: Array.from(brands) as string[]
    }
}

const findCaller = {
  'category': prisma.category.findMany(),
  'brand': prisma.brand.findMany()
}


async function seedDynamicTable (list: string[] = [], map: Map<string, string>, table: 'category' | 'brand') {
  if (!list.length) {
    console.error(`Empty array provided!`);    
    return false
  }
  try {
    console.log(`Seeding for ${table} started...`);
    
    const response = await prisma[table].createMany({
        data: list.map((item) => ({
            name: item as string
        }))
    })
    if (response.count) {
        console.log(`Inserted ${response.count} ${table}`)
    }
    const insertedItems = await findCaller[table]
    for (const item of insertedItems) {
        if (item.name && item.id) map.set(item.name, item.id)
    }

    console.log(`Seeding for ${table} completed...`)
    return true
  } catch (error) {
    console.log(`Unexpected Error occured while seeding categories!`)
    console.error(error)
    return false
  }
}

async function initiateDynamicSeeding () {
  const uniqueData: {[key: string]: string[]} = getUniqueData()
  for (const key of validKeys) {
    if (key in uniqueData) {
      const isKeySeeded = await seedDynamicTable(uniqueData[key] as string[], dynamicItems[key], key as 'category' | 'brand')
      if (isKeySeeded) {
        console.log(`Seeding for ${key} completed!`)
        console.log(Object.fromEntries(dynamicItems[key]))
      }
    }
  }
}

async function initiateProductSeeding() {
    const segregatedProducts = products.map(({
        id, title, description, category, price,
        discountPercentage, rating, stock, tags, brand,
        sku, weight, dimensions, warrantyInformation,
        shippingInformation, availabilityStatus, reviews,
        returnPolicy, minimumOrderQuantity, meta, images, thumbnail
    }) => ({
            id,
            seedProduct: { 
              name: title, description, price, discount_percentage: discountPercentage, 
              stock, sku, warranty_information: warrantyInformation, shipping_information: shippingInformation,
              isAvailable: availabilityStatus === 'In Stock', return_policy: returnPolicy,
              minimum_order_quantity: minimumOrderQuantity, thumbnail, rating
            },
            tags, unit_dimensions: { weight, unit: 'kg', ...dimensions },
            reviews, images, category, brand, 
            meta: {
              created_at: meta.createdAt, updated_at: meta.updatedAt, barcode: meta.barcode, qrcode: meta.qrCode
            }
        }))
    try {
      for (const product of segregatedProducts) {
        console.log(`Starting to seed product: ${product.seedProduct.name} with category: ${product.category} and brand: ${product.brand}`)

        if (!product?.category && !product?.brand) continue
        console.log(`Seeding for ${product.seedProduct.name} started...`)
        const product_id = await prisma.product.create({
          data: {
            ...product.seedProduct,
            category: { connect: { id: dynamicItems.category.get(product.category)}},
            brand: { connect: { id: product.brand ? dynamicItems.brand.get(product.brand) : dynamicItems.brand.get('No Name')}},
            unit_dimension: { create: product.unit_dimensions },
            reviews: { createMany: {
              data: product.reviews.map(review => ({
                rating: review.rating,
                comment: review.comment,
                created_at: review.date,
                // reviewerName: review.reviewerName,
                // reviewerEmail: review.reviewerEmail
              }))
            }},
            tags: { createMany: {
              data: product.tags.map(tag => ({
                name: tag
              }))
            }},
            images: {
              createMany: {
                data: product.images.map(image => ({
                  url: image
                }))
              }
            },
            meta: {
              create: product.meta
            }
          }
        })
        console.log(`Seeding for ${product.seedProduct.name} with id: ${product_id} generated...`);
      }
    } catch (error) {
      console.log(`Error occured while creating products!`)
      console.error(error)      
      await prisma.category.deleteMany()
      await prisma.brand.deleteMany()
    }
}

async function main() {
  await initiateDynamicSeeding()
  await initiateProductSeeding()
  // console.log(products[0])
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})