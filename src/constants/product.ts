import { ProductSearchResponseType } from "@/types/products";
import { DEFAULT_SEARCH_QUERY } from "./requestTypes";

export const DEFAULT_PRODUCT_RESPONSE = {
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
    loading: false,
    error: null
} as unknown as ProductSearchResponseType