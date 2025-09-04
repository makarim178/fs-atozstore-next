import { DEFAULT_SEARCH_QUERY, REQUEST_HEADERS } from '@/constants/requestTypes'
import type { ProductSearchCriteria, ProductSearchResponseType } from '@/types/products'

async function searchProduct(requestBody: ProductSearchCriteria): Promise<ProductSearchResponseType>  {
    const requestOptions: PostRequestType = {
        method: 'POST',
        headers: REQUEST_HEADERS,
        body: JSON.stringify(requestBody)
    }
    const response = await fetch('http://localhost:5121/api/Products/search', requestOptions)
    return await response.json()
}

const promiseSearchProduct = () => {
    const requestOptions: PostRequestType = {
        method: 'POST',
        headers: REQUEST_HEADERS,
        body: JSON.stringify(DEFAULT_SEARCH_QUERY)
    }
    return new Promise<ProductSearchResponseType>((resolve, reject) => {
        setTimeout(() => {
            fetch('http://localhost:5121/api/Products/search', requestOptions)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))

        }, 2000) // Simulate a 2 second delay
    })  
}

const destructureProductSearch = (searchQuery: string): ProductSearchCriteria => {
    if (!searchQuery) return DEFAULT_SEARCH_QUERY
    return JSON.parse(searchQuery)
}

export const productService = {
    searchProduct,
    destructureProductSearch,
    promiseSearchProduct
}