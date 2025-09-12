import { ProductSearchResponseType } from "@/types/products";
// import { DEFAULT_SEARCH_QUERY } from "./requestTypes";

export const DEFAULT_PRODUCT_RESPONSE = {
    products: [],
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    pageSize: 10,
    isLoading: false,
    isError: false,
    errorMessage: ''
} as ProductSearchResponseType

// export const DEFAULT_PRODUCT_RESPONSE_PROVIDER = {
//     products: [],
//     pagination: {
//         currentPage: 1,
//         totalPages: 1,
//         totalCount: 0,
//         hasNextPage: false,
//         hasPreviousPage: false,
//         pageSize: 10
//     },
//     searchQuery: DEFAULT_SEARCH_QUERY,
//     setSearchQuery: () => {},
//     isLoading: false,
//     isError: false,
//     errorMessage: ''
// } as unknown 