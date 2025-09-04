import { CartContext } from "@/contexts/cart-context";
import { CartContextType } from "@/types/cart";
import { useContext } from "react";

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within a Cart provider')
    return context
}