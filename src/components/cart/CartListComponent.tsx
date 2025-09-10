'use client'
// import { useCart } from "@/app/hooks/useCart"
import { useCartContext } from "@/hooks/useCart"
import { CartItemComponent } from "./CartItemComponent"
import { CART } from "@/constants/notifications"

export const CartListComponent = () => {
    const { cart } = useCartContext()

    // console.log(cart);
    

    return (
        <div className="flex flex-col md:w-2/3 justify-center border-1 rounded-sm gap-6 p-4 lg:p-12 min-w-[412px] h-full">
            {/* <h4 className="text-sm font-semibold title-text-theme">Total: {optimisticCart?.total}</h4> */}
            {/* <h4 className="text-sm font-semibold title-text-theme">Total: {cart?.total.toFixed(2)}</h4> */}
            {/* <div className="flex flex-col md:flex-row md:flex-wrap"> */}
                {
                    cart?.items && cart?.items?.length > 0 ?
                    cart?.items?.map(item => (
                        <CartItemComponent key={item.productId} item={item} />
                    ))
                    : <span>{ CART.EMPTY}</span>
                    // optimisticCart?.items?.map(item => (
                    //     <CartItemComponent key={item.productId} item={item} />
                    // ))
                }
            {/* </div> */}

        </div>
    )
}