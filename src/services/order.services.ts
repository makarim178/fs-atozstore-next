import { BASE_URI, URI } from "@/constants/api"
import { ORDER_ERROR } from "@/constants/errors"
import { REQUEST_HEADERS } from "@/constants/requestTypes"
import { OrderType } from "@/types/cart"
import { UUID } from "crypto"

export const OrderServices = {
    getOrder: async (orderId: string) => {
        if (!orderId) throw new Error(ORDER_ERROR.NO_ORDER_ID)

        const response = await fetch(`${BASE_URI}${URI.GET_ORDER}${orderId}`)
        if (!response.ok) throw new Error(ORDER_ERROR.FAILED_ORDER)
        
        return await response.json()
    },
    createOrder: async (sessionId: UUID | null): Promise<OrderType> => {
        if (!sessionId) throw new Error('Cannot generate order without sessionId')
        const response = await fetch(`${BASE_URI}${URI.CREATE_ORDER}${sessionId}`, {
            method: 'POST',
            headers: REQUEST_HEADERS
        })
        if (!response.ok) {
            throw new Error('Failed to create order')
        }
        return await response.json()
    }
}