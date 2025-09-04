'use client'
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
    console.log(session)

    if (session) return null

    // sessionId = randomUUID()

    // cookies.set(SESSION_KEY, sessionId)

    // Create cart
    try {
        const cartResponse = await CartServices.createSession(sessionId as UUID)
        return cartResponse
    } catch (error) {
        if (error instanceof Error && error?.message) console.error(error.message)
        throw new Error('Error Occured while creating session and cart.')
    }
}