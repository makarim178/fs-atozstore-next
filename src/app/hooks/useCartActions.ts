import { SESSION_KEY } from "@/constants/common";
import { AddToCartPayloadType, CartItemType, CartType, ItemType, UpdateCartItemPayloadType, UseCartActionPropsType, UseCartActionResponseType } from "@/types/cart";
import { UUID } from "crypto";
import { useCookies } from "next-client-cookies";
import { useCallback } from "react";
import { useProductContext } from "./useProduct";
import { CartServices } from "@/services/cart.services";
import { calculateCartTotal, calculateLineTotal, getCartItem } from "@/lib/cart";

export const useCartActions = ({ cart, setCart }: UseCartActionPropsType): UseCartActionResponseType => {
    const { products } = useProductContext()
    const cookies = useCookies()
    const sessionId = cookies.get(SESSION_KEY)
    
    const setCookies = useCallback(() => {
        if (sessionId) return null

        cookies.set(SESSION_KEY, sessionId as UUID)
    }, [sessionId])

    const addItemToCart = async (item: AddToCartPayloadType): Promise<void> => {
        if (!cart) {
            console.error(CART_ERRORS.NOT_AVAILABLE)
            return
            // return Promise.resolve(CART_ERRORS.NOT_AVAILABLE)
        }
        // when item is already in cart 
        // increment item quantity instead
        const itemInCart = cart.items.filter(c => c.productId === item.productId)
        if (itemInCart.length) {
            await incrementQuantity(itemInCart[0].cartItemId)
            return            
        }

        const product = products.filter(prod => prod.productId === item.productId)[0]

        let quantity = item.quantity ?? 1
        
        // Implementation for Optimistic Cart
        const optimisticItem: ItemType = {
            productId: product.productId,
            productName: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            description: product.description,
            quantity,
            lineTotal: product.price * quantity
        }

        const response = await CartServices.addToCart({
            cartId: cart.id,
            productId: product.productId,
            quantity: quantity
        })

        if (response) setCart((prev: CartType) => ({ ...prev, items: [...prev.items, response], total: calculateCartTotal([...prev.items, response])}))
    }

    const removeFromCart = async (cartItemId: UUID): Promise<void> => {
        if (!cart) {
            console.error(CART_ERRORS.NOT_AVAILABLE);
            return            
        }

        const itemInCart = getCartItem(cartItemId, cart.items)
        if (!itemInCart) {
            console.error(CART_ERRORS.ITEM_NOT_AVAILABLE);
            return            
        }

        const response = await CartServices.removeCartItem(cartItemId)
        if (response) {
            setCart((prev: CartType) => {
                const newCartItems = cart.items.filter(c => c.cartItemId !== cartItemId)
                const total = calculateCartTotal(newCartItems)
                return { ...prev, items: newCartItems, total }
            })
        }
    }

    const incrementQuantity = async (cartItemId: UUID): Promise<void> => {
        if (!cart) {
            console.error(CART_ERRORS.NOT_AVAILABLE);
            return
        }

        const itemInCart = getCartItem(cartItemId, cart.items)
        if (!itemInCart) {
            console.error(CART_ERRORS.ITEM_NOT_AVAILABLE)
            return
        }
        let quantity = itemInCart.quantity + 1

        const payload: CartItemType = {
            ...itemInCart,
            quantity,
            lineTotal: calculateLineTotal(itemInCart.price, quantity)
        }

        const response = await CartServices.updateCartItem(payload)
        if (response) {
            setCart((prev: CartType) => {
                const items = prev.items.map((prevItem) => {
                    if (prevItem.cartItemId === payload.cartItemId) return payload
                    return prevItem
                })
                
                const total = calculateCartTotal(items)
                return { ...prev, items, total}
            })
        }
    }

    const decrementQuantity = async (cartItemId: UUID): Promise<void> => {
        if (!cart) {
            console.error(CART_ERRORS.NOT_AVAILABLE);
            return
        }

        const itemInCart = getCartItem(cartItemId, cart.items)
        if (!itemInCart) {
            console.error(CART_ERRORS.ITEM_NOT_AVAILABLE)
            return
        }

        if (itemInCart.quantity <= 1) {
            await removeFromCart(cartItemId)
            return
        }
        let quantity = itemInCart.quantity - 1

        const payload: CartItemType = {
            ...itemInCart,
            quantity,
            lineTotal: calculateLineTotal(itemInCart.price, quantity)
        }

        const response = await CartServices.updateCartItem(payload)
        if (response) {
            setCart((prev: CartType) => {
                const items = prev.items.map((prevItem) => {
                    if (prevItem.cartItemId === payload.cartItemId) return payload
                    return prevItem
                })

                const total = calculateCartTotal(items)
        
                return { ...prev, items, total}
            })
        }
    }

    const clearCart = () => setCart((prev: CartType) => ({ ...prev, items: [], total: 0}))

    return {
        createCart: setCookies,
        addItemToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart
    }
}