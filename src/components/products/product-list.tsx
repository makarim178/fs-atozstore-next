'use client'
import { useProductContext } from '@/hooks/useProduct'
import { ProductCard } from './product-card'
import { Pagination } from '../ui/pagination/pagination-container'
import { useMemo } from 'react'
import ProductCardSkeleton from './product-cart-skeleton'

export default function ProductList() {
  const { products, isLoading } = useProductContext()
  const skeletonList: string[] = useMemo(() => Array.from({ length: 8 }, (_, i) => `skeleton-product-${i+1}`), [])

  return (
    <>
      <h3 className="text-lg font-semibold ">Products</h3>
      <div className="flex flex-wrap justify-start gap-6">
        {
          isLoading 
            ?  skeletonList.map(id => <ProductCardSkeleton key={id} />)
            : products.map(product => (
                <ProductCard key={product.productId} product={product}  />
            ))
        }
      </div>
      <Pagination />
    </>
  )
}
