'use client'

import { use, useState } from "react"
import { useCookies } from 'next-client-cookies'
import { createSession } from "@/lib/session"
import { CartContextType, CartItemType, CartType } from "@/types/cart"
import { CartContext } from "@/contexts/cart-context"
import { SESSION_KEY } from "@/constants/common"
import { CartServices } from "@/services/cart.services"
import { UUID } from "crypto"
import { productService } from "@/services/product.services"
import { CartProviderPropsType } from "@/types/props"

// const generateSession = (cookies: ReturnType<typeof useCookies>):Promise<CartType> => {
//     return CartServices.createSession
// }

// const generateSession = CartServices.createSession
// const generateSession = productService.promiseSearchProduct()

export default function CartProvider ({ cartData,  children }: CartProviderPropsType) {
    const [cart, setCart] = useState<CartType | null >(cartData)
    const cookies = useCookies()

    const setCookies = () => {
        let session = cookies.get(SESSION_KEY)
        if (session) return null

        if (cart?.sessionId) cookies.set(SESSION_KEY, cart.sessionId)
    }

    const getTotalItemsInCart = () => {
        if (!cart || cart?.items?.length <= 0 ) return 0
        return cart.items.length        
    }

    

    // const getCookies = cookies.get(SESSION_KEY)


    // const genSession = generateSession(cookies)

    // const cartResponse = use(generateSession(crypto.randomUUID() as UUID))
    // const cartResponse = use(generateSession)
    // if (!cartResponse) throw new Error('Could not create cart / generate session!')

    // setCart(cartResponse)
    // cookies.set(SESSION_KEY, cartResponse.sessionId)


    const contextValue: CartContextType = {
        cart: cart,
        sessionId: null,
        getCartId: '',
        setCookies,
        getTotalItemsInCart
    }
    
    return (
        <CartContext value={contextValue}>
            {children}
        </CartContext>
    )
}