'use client'

import { debounce } from 'lodash'
import { productService } from '@/services/product.services'
import { useState } from 'react'
import { ProductContext } from '@/contexts/product-context'
import { DEFAULT_SEARCH_QUERY } from '@/constants/requestTypes'
import type { ProductSearchCriteria, ProductSearchResponseType } from '@/types/products'
import { DEFAULT_PRODUCT_RESPONSE } from '@/constants/product'

export const ProductProvider = ({initialData, children} : { initialData: ProductSearchResponseType, children: React.ReactNode}) => {
    const [data, setData] = useState<ProductSearchResponseType>(initialData ?? DEFAULT_PRODUCT_RESPONSE)
    const [searchQuery, setSearchQuery] = useState<ProductSearchCriteria>(DEFAULT_SEARCH_QUERY)

    // Implement manual Memoization Technique
    const [memoizeData, setMemoizeData] = useState(new Map())

    const debounceSearch = debounce(async (query: ProductSearchCriteria) => {
           setSearchQuery(query)
           const stringQuery = JSON.stringify(query)

           // Memoize Data when hits
           if (memoizeData.has(stringQuery)) {
            setData(memoizeData.get(stringQuery))
            return
           }

           const response = await productService.searchProduct(query)
           // when misses set to memoize
           setMemoizeData(prev => {
            const newMap = new Map(prev)
            newMap.set(stringQuery, response)
            return newMap
           })

           setData(response)
       }, 500)
    return (
        <ProductContext.Provider value={{
            products: data.products || [],
            pagination: {
                currentPage: data?.currentPage || 1,
                totalPages: data?.totalPages || 1,
                totalCount: data?.totalCount || 0,
                pageSize: data?.pageSize || 10,
                hasNextPage: data?.hasNextPage || false,
                hasPreviousPage: data?.hasPreviousPage || false
            },
            searchQuery,
            setSearchQuery: debounceSearch,
            isLoading: !!data.isLoading,
            isError: !!data.isError,
            errorMessage: data.errorMessage ?? '',
            error: null
        }}>
            { children }
        </ProductContext.Provider>
    )
}