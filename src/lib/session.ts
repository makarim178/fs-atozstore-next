// 'use client'
// import { cookies } from 'next/headers'
import { UUID } from 'crypto'
import { SESSION_KEY } from '@/constants/common'
import { CartServices } from '@/services/cart.services'
import { CartType } from '@/types/cart'
import { useCookies } from 'next-client-cookies'

// export async function getSession(): Promise<string | null> {
//     const cookieStore = await cookies()
//     const sessionId = cookieStore.get(SESSION_KEY)?.value

//     if (!sessionId) return null

//     return sessionId
// }

export async function createSession(sessionId: string, cookies: ReturnType<typeof useCookies>): Promise<CartType | null> {
    let session = cookies.get(SESSION_KEY)

    if (session) return null

    try {
        const cartResponse = await CartServices.createSession(sessionId as UUID)
        return cartResponse
    } catch (error) {
        if (error instanceof Error && error?.message) console.error(error.message)
        throw new Error('Error Occured while creating session and cart.')
    }
}


export async function handleInitialSession(sessionId: string): Promise<CartType | null> {
    if (!sessionId) {
        console.error(SESSION_ERROR.SESSION_ID_NOT_AVAILABLE);
        return null
    }

    let cart = await CartServices.getCart(sessionId as UUID)

    if (cart) return cart

    return await CartServices.createSession(sessionId as UUID)
}