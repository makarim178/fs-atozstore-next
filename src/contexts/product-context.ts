import { DEFAULT_SEARCH_QUERY } from "@/constants/requestTypes";
import { ProductsContextType } from "@/types/products";
import { createContext } from "react";

export const ProductContext = createContext<ProductsContextType>({
    products: [],
    pagination: {
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        hasNextPage: false,
        hasPreviousPage: false,
        pageSize: 10
    },
    searchQuery: DEFAULT_SEARCH_QUERY,
    setSearchQuery: () => {},
    isLoading: false,
    isError: false,
    errorMessage: '',
    error: null
})