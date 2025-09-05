'use client'
import { useProductContext } from '@/app/hooks/useProduct'
// import { productService } from '@/services/product.services'  
import { ProductCard } from './product-card'
import { Pagination } from '../ui/pagination/pagination-container'
// const productsQuery = productService.promiseSearchProduct()

export default function ProductList() {
  const { products } = useProductContext()

  if (!products) {
    return 
  }

  return (
      <>
            <h3 className="text-lg font-semibold ">Products</h3>
            <div className="flex flex-wrap justify-start gap-6">
                {
                    products.map(product => (
                        <ProductCard key={product.productId} product={product}  />
                    ))
                }
            </div>
            <Pagination />
        </>
  );
}
