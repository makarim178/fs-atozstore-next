import { Suspense } from 'react'
import ProductList from '@/components/products/product-list';
import { ProductFilterComponent } from '@/components/products/product-filter';
import { AuthBtn } from '@/components/ui/auth-btn';
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-12">
      <div className="flex flex-col">
        <ProductFilterComponent />
        <AuthBtn />
      </div>
      <div className='flex flex-col p-2 gap-6 flex-grow'>
        <Suspense fallback={<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">Loading...</div>} >
          <ProductList />
        </Suspense>
      </div>
    </div>
  )
}
