import type { ReactNode } from 'react'
import { CartType } from './cart'

type OnlyChildrenPropsType = {
    children: ReactNode
}

type RangeInputComponentPropsType = {
  id: string 
  value: number
  maxValue: number
  title: string
  getMaxValue?: boolean
  getValue: (changedValue: number) => void
}


type ProductSearchPropsType = {
  mutateQuery: (query: QueryParamsType) => void
}

type DoubleSliderPropsType = {
  mutateQuery: ( query: QueryParamsType) => void
}

type QueryParamsType = {
  search?: string
  minPrice?: number
  maxPrice?: number
}

type CartProviderPropsType = {
  cartData: CartType | null,
  children: React.ReactNode
}

type CallbackType = () => string

type CardPropsType = {
  children: React.ReactNode
  imageUrl: string
  title: string
  price: number
  description: string
}

type OrderCompletePropsType = {
  params: {
    orderId: string
  }
}