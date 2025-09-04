import { Suspense } from 'react'
import ProductList from './components/products/product-list';
import { ProductFilterComponent } from './components/products/product-filter';
export default function Home() {
  return (
    <div className='flex flex-col md:flex-row pb-4 px-4 mt-20'>
      <ProductFilterComponent />
      <div className='flex flex-col'>
        <Suspense fallback={<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">Loading...</div>} >
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}
