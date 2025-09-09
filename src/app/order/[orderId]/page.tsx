import { NavigationBtn } from "@/app/components/ui/navigation-button";
import { OrderServices } from "@/services/order.services";
import { OrderType } from "@/types/cart";
import { OrderCompletePropsType } from "@/types/props";


export default async function OrderComplete({ params }: OrderCompletePropsType) {
    let orderDetails
    const { orderId } = params
    if (!orderId) {
        return (<div className="flex flex-col gap-8 border-1 border-background/10 dark:border-foreground/10 p-12">Order Id is required!</div>)
    }

    orderDetails = await OrderServices.getOrder(params.orderId) as OrderType
     

    return (
        <div className="flex flex-col gap-8 border-1 border-background/10 dark:border-foreground/10 p-12">
            <div className="flex flex-col justify-between items-center gap-6">
                <h3 className="text-lg font-semibold title-text-theme">
                    Thank you for Ordering Products from AtoZStore!
                </h3>
                <p className='title-text-theme text-sm'>
                    Your Order id: <strong>{orderId}</strong>
                </p>
                <NavigationBtn navLink="/"/>
            </div>
        </div>
    )
}