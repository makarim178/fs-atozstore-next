'use client'

import { useCallback, useState } from "react"
import { useCookies } from 'next-client-cookies'
// import { createSession } from "@/lib/session"
import { CartContextType, CartItemType, CartType } from "@/types/cart"
// import { CartContext } from "@/contexts/cart-context"
// import { SESSION_KEY } from "@/constants/common"
// import { CartServices } from "@/services/cart.services"
// import { UUID } from "crypto"
// import { productService } from "@/services/product.services"
import { CartProviderPropsType } from "@/types/props"
import { getTotalItemCount } from "@/lib/cart"
import { useCartActions } from "../hooks/useCartActions"
import { CartContext } from "@/contexts/cart-context"

// const generateSession = (cookies: ReturnType<typeof useCookies>):Promise<CartType> => {
//     return CartServices.createSession
// }

// const generateSession = CartServices.createSession
// const generateSession = productService.promiseSearchProduct()

export default function CartProvider ({ cartData,  children }: CartProviderPropsType) {
    const [cart, setCart] = useState<CartType | null >(cartData)
    const cookies = useCookies()

    if (!cart) throw new Error('Cannot initiate Cart')
    const { 
        createCart, 
        addItemToCart, 
        incrementQuantity, 
        decrementQuantity, 
        removeFromCart, 
        clearCart 
    } = useCartActions({ cart, setCart })

    const contextValue: CartContextType = {
        cart: cart,
        sessionId: null,
        getCartId: useCallback(() => cart.id, [cart.id]),
        createCart,
        addItemToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        getTotalItemsInCart: () => getTotalItemCount(cart?.items ?? [])
    }
    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}