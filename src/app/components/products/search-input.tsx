'use client'
import { ProductSearchPropsType } from '@/types/props'
import { SearchIcon } from 'lucide-react'
import { memo, useState } from 'react'
export const ProductSearchInputComponent = memo(({ mutateQuery }: ProductSearchPropsType) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setInputValue(searchTerm)
        mutateQuery({search: searchTerm.trim() })
    }
    return (
        <div className="flex items-center gap-2 input-color-theme px-4 py-1 pr-4 rounded-md">
            <SearchIcon />
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search" 
                className="focus:outline-none w-full p-1 input-text-theme"
            />
        </div>
    )
})