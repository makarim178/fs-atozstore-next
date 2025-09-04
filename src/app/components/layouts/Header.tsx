'use client'
import { ShoppingCart, SunMoon } from 'lucide-react'
import { ThemeButtonComponent } from '../theme/theme-button'
import { useCart } from '@/app/hooks/useCart'
export const HeaderComponent = () => {
    const { setCookies, getTotalItemsInCart } = useCart()

    setCookies()
    return (
        <header className="fixed top-0 left-0 w-full bg-foreground dark:bg-background  dark:text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="text-lg font-semibold">A2Z Store</div>
                <nav className="flex space-x-4 gap-4">
                    <div className='flex items-center cursor-pointer hover:opacity-80 transition gap-2'>
                        <ShoppingCart className="inline-block w-6 h-6" />
                        <span className="align-middle">Cart ({ getTotalItemsInCart() })</span>
                    </div>
                    <ThemeButtonComponent />
                </nav>
            </div>
        </header>
    )
}

