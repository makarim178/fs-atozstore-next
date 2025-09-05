'use client'
import { useCartContext } from "@/app/hooks/useCart"
import { throttle } from "@/lib/common"

export const CartSummary = () => {
    const { cart, getTotalItemsInCart } = useCartContext()
    // const navigate = useNavigate()

    const handleCheckout = async () => {
        try {
            // const order = await createOrder()
            // toast.success(`Order has been created. Order ID: ${order.id}`)
            // navigate(`${ROUTES.ORDER}/${order.id}`)
        } catch (error) {
            // toast.error('Order could not be created due to internal errors!')
            if (error instanceof Error) console.error("Order creation failed:", error.message)
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