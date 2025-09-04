'use client'
import { QueryParamsType } from "@/types/props"
import { ProductSearchInputComponent } from "./search-input"
import { useState } from "react"
import { ProductSearchCriteria } from "@/types/products"
import { PRICE_RANGE } from "@/constants/common"
import { DEFAULT_PAGE_SIZE } from "@/constants/requestTypes"
import { DoubleSlider } from "@/app/components/ui/double-slider"
import { useProductContext } from "@/app/hooks/useProduct"

export const ProductFilterComponent = () => {
    const [combQuery, setCombQuery] = useState<ProductSearchCriteria>({
        search: '',
        minPrice: PRICE_RANGE.MIN,
        maxPrice: PRICE_RANGE.MAX,
        page: 1,
        pageSize: DEFAULT_PAGE_SIZE
    })
    const { setSearchQuery } = useProductContext()

    const mutateQuery = (query: QueryParamsType) => {
        setCombQuery( prev => ({...prev, ...query}))
        console.log({ ...combQuery, ...query})
        setSearchQuery({ ...combQuery, ...query})
    }
    return (
        <div className="flex flex-col px-2 gap-4">
            <h3 className="text-lg font-semibold">Filters</h3>
            <ProductSearchInputComponent mutateQuery={mutateQuery} />
            <DoubleSlider mutateQuery={mutateQuery} />
        </div>
    )
}