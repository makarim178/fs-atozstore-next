import { CartListComponent } from "@/components/cart/CartListComponent";
import { CartSummary } from "@/components/cart/CartSummary";

export default function CheckoutPage() {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="text-lg font-semibold title-text-theme">Checkout</h3>
            <div className="flex flex-col md:flex-row gap-2 justify-between items-start">
                <CartListComponent />
                <CartSummary />
            </div>
        </div>
    )
}