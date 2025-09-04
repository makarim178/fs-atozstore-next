import { ProductsContextType } from "@/types/products";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product-context";

export const useProductContext = (): ProductsContextType => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider")
    }
    return context
}