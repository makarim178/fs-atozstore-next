import { CartType } from "@/types/cart";

export const DEFAULT_CART_RESPONSE = {
    id: null,
    sessionId: null, 
    items: [],
    total: 0,
    isError: false,
    isLoading: false,
    errorMessage: ''
} as CartType