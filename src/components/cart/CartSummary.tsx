'use client'
import { useCartContext } from "@/hooks/useCart"
import { ORDER_ERROR, SESSION_ERROR } from "@/constants/errors"
import { throttle } from "@/lib/common"
import { OrderServices } from "@/services/order.services"
import { useRouter } from "next/navigation"

export const CartSummary = () => {
    const { cart, getTotalItemsInCart, clearCart } = useCartContext()
    const router = useRouter()
    // const navigate = useNavigate()

    const handleCheckout = async () => {
        if (!cart) {
            throw new Error(SESSION_ERROR.SESSION_ID_NOT_AVAILABLE)
        }
        try {
            const order = await OrderServices.createOrder(cart?.sessionId)
            if (order) {
                clearCart()
                router.push(`/order/${order?.id}`)
            }
            // toast.success(`Order has been created. Order ID: ${order.id}`)
            // navigate(`${ROUTES.ORDER}/${order.id}`)
        } catch (error) {
            // toast.error('Order could not be created due to internal errors!')
            if (error instanceof Error) console.error(ORDER_ERROR.FAILED_ORDER)
        }
    }

    // if (isLoading) return <div>Loading Cart...</div>

    if (!cart || !cart?.items?.length) {
        return (
            <div className="text-center py8">
                <p className="text-gray-500">
                    Your cart is Empty!
                </p>
            </div>
        )
    }

    return (
        <div className="border-1 min-w-[412px] main-border rounded-sm md:w-1/3 p-12">
            <h2 className="text-md md:text-lg lg:text-xl font-bold mb-4 title-text-theme">
                Cart Summary
            </h2>
            <div className="space-y-2 mb-4 title-text-theme text-sm md:text-md lg:text-lg">
                <div className="flex justify-between">
                    <span>Items ({ getTotalItemsInCart()})</span>
                    <span>${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt2">
                    <span>Total</span>
                    <span>${cart.total.toFixed(2)}</span>
                </div>
            </div>
            <button
                onClick={throttle(handleCheckout)}
                // disabled={isCreatingOrder}
                className="py-3 w-full bg-background/20 dark:bg-foreground/10 cursor-pointer shadow-md dark:shadow-none hover:bg-background/30 dark:hover:bg-foreground/20"
            >
                Checkout
                {/* { isCreatingOrder ? 'Creating Order... ' : 'Checkout'} */}
            </button>
        </div>
    )
}