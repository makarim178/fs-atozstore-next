import type { CartItemType, CartType } from '@/types/cart'
import { UUID } from 'crypto'

export const calculateLineTotal = (price: number, quantity: number): number => price * quantity 

export const calculateCartTotal = (items: CartItemType[]): number  => items.reduce((total, { lineTotal }) => total + lineTotal, 0) 
export const getTotalItemCount = (items: CartItemType[]) => items.reduce((total, { quantity }) => total + quantity , 0)

export const updateItemQuantity = (item: CartItemType, newQuantity: number): CartItemType => {
    const lineTotal = calculateLineTotal(item.price, item.quantity)
    return {
        ...item,
        quantity: newQuantity,
        lineTotal
    }
}

export const getCartItem = (itemId: UUID, cartList: CartItemType[]): CartItemType | null => {
    if (!cartList?.length)  return null

    const filteredItem = cartList.filter(cartItem => cartItem.cartItemId === itemId)
    if (!filteredItem?.length) return null

    return filteredItem[0]
}