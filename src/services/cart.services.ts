import { BASE_URI, URI } from '@/constants/api'
import { DEFAULT_CART_RESPONSE } from '@/constants/cart'
import { CART_ERRORS, SESSION_ERROR } from '@/constants/errors'
import { REQUEST_HEADERS } from '@/constants/requestTypes'
import type { 
    AddToCartPayloadType, 
    CartItemType, 
    CartType, 
    OrderType, 
    UpdateCartItemPayloadType 
} from '@/types/cart'
import type { UUID } from 'crypto'

const postRequestOptions = (method: RequestType['method'] = 'POST'): PostRequestType => ({
    method,
    headers: REQUEST_HEADERS,
})

export const CartServices = {
    createSession: async (sessionId: UUID): Promise<CartType> => {
        try {
            const response = await fetch(`${BASE_URI}${URI.CREATE_SESSION}${sessionId}`, postRequestOptions())
            if (!response.ok) throw new Error(CART_ERRORS.FAILED_CART)
            const data = await response.json()

            return {
                ...DEFAULT_CART_RESPONSE,
                ...data
            }
        } catch (error) {
            let errorMessage = error instanceof Error ? error.message : CART_ERRORS.FAILED_CART
            return {
                ...DEFAULT_CART_RESPONSE,
                sessionId,
                isError: true,
                isLoading: true,
                errorMessage
            }            
        }
    },
    getCart: async (sessionId: UUID): Promise<CartType | null> => {
        if (!sessionId) throw new Error(SESSION_ERROR.SESSION_ID_NOT_AVAILABLE)
        const response = await fetch(`${BASE_URI}${URI.GET_CART}${sessionId}`
            , {
                method: 'GET'
            })
        if (!response.ok) {
            // throw new Error(CART_ERRORS.FAILED_CART)
        }

        if (response.status === 204) return null
        return await response.json()
    },
    addToCart: async (payload: AddToCartPayloadType): Promise<CartItemType> => {
            const response = await fetch(`${BASE_URI}${URI.ADD_TO_CART}`, {
                ...postRequestOptions(),
                body: JSON.stringify(payload)
            })
            if (!response.ok) {
                throw new Error('Failed to add item to cart')
            }
            return await response.json()
    },
    updateCartItem: async (payload: UpdateCartItemPayloadType): Promise<boolean> => {
        const response = await fetch(`${BASE_URI}${URI.UPDATE_CART_ITEM}`, {
            ...postRequestOptions('PUT'),
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error('Failed to update cart item')
        }
        return true
    },
    removeCartItem: async (cartItemId: UUID): Promise<boolean> => {
        const respones = await fetch(`${BASE_URI}${URI.REMOVE_CART_ITEM}${cartItemId}`
            , { method: 'DELETE' })
        if (!respones.ok) {
            throw new Error('Failed to remove cart item')
        }
        return true
    }
}