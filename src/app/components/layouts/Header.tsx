'use client'
import { ShoppingCart } from 'lucide-react'
import { ThemeButtonComponent } from '../theme/theme-button'
import { useCartContext } from '@/app/hooks/useCart'
import Link from 'next/link'
import { CartListComponent } from '../cart/CartListComponent'
export const HeaderComponent = () => {
    const { createCart, getTotalItemsInCart } = useCartContext()

    createCart()

    return (
        <header className="fixed top-0 left-0 w-full bg-foreground dark:bg-background  dark:text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href={'/'} className="text-lg font-semibold">A2Z Store</Link>
                <nav className="flex space-x-4 gap-4 h-full items-center">
                    <Link className='h-full' href={'/checkout'}>
                        <div className='relative group flex items-center cursor-pointer transition gap-2 h-full'>
                            <ShoppingCart className="inline-block w-6 h-6" />
                            <span className="align-middle">Cart ({ getTotalItemsInCart() })</span>
                            <div className="hidden group-hover:block absolute bg-foreground dark:bg-background top-16 right-0 border-1">
                                {/* <h5 className="text-sm font-semibold px-4 text-neutral-700">Total Cart Items: {getTotalItemsInCart()}</h5> */}
                                <CartListComponent />
                            </div>
                        </div>
                    </Link>
                    <ThemeButtonComponent />
                </nav>
            </div>
        </header>
    )
}

