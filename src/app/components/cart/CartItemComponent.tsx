'use client'
import { useCartContext } from '@/app/hooks/useCart'
// import { 
//     RemoveCircleOutlineRounded, 
//     AddCircleOutlineRounded, 
//     RemoveShoppingCartRounded
// } from '@mui/icons-material'
import type { CartItemComponentPropsType } from "@/types/cart"
import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { CardComponent } from '../ui/card'
import { cadFormatter } from '@/constants/common'

export const CartItemComponent = ({ item }: CartItemComponentPropsType) => {
    const {
        incrementQuantity,
        decrementQuantity,
        removeFromCart
     } = useCartContext()

     const handleIncrement = async () =>  {
        try {
            await incrementQuantity(item.cartItemId)            
        } catch (error) {
            console.error('Failed to increment quantity', error)            
        }
    }
    
    const handleDecrement = async () => {
        try {
            await decrementQuantity(item.cartItemId)
        } catch (error) {
            console.error('Failed to decrement quantity', error)                        
        }
    }
    
    const handleRemove = async () => {
        try {
            await removeFromCart(item.cartItemId)   
        } catch (error) {
            console.error('Failed to remove item', error)
        }
     }

    return (
        <div className='flex justify-between gap-4 items-center'>
            <div className="relative border-1 main-border product-image-bg rounded-xs shadow-sm overflow-hidden h-24 min-w-32 md:min-w-32 md:h-28">
                <Image 
                    src={item.imageUrl}
                    alt={item.productName} 
                    placeholder='blur'
                    blurDataURL='...'
                    onError={(error) => console.log(error)}
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className='w-full h-full content-stretch text-sm md:text-md lg:text-lg'>
                <div className="flex justify-between">
                    <h4 className="font-semubold pr-2">{item.productName}</h4>
                    <p className="text-gray-600 darl:text-gray-200">{cadFormatter.format(item.price)}</p>
                </div>
                <div className='flex justify-between items-center h-full content-end text-sm md:text-md lg:text-lg'>
                    <p className="text-sm text-gray-500 dark:text-gray-200">Total: { cadFormatter.format(item.lineTotal)}</p>
                    <div className='flex items-center gap-3'>
                        <button 
                            onClick={handleDecrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CircleMinus className="text-gray-600 dark:text-gray-200 hover:text-amber-700 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                        </button>
                        <span className="py-2 rounded title-text-theme">{item.quantity}</span>
                        <button 
                            onClick={handleIncrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CirclePlus className="text-gray-600 dark:text-gray-200 hover:text-blue-800 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                        </button>
                        <button 
                            onClick={handleRemove}
                            // disabled={isRemovingFromCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <Trash2 className="text-red-600 dark:text-red-700 hover:opacity-50 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex md:flex-col w-full">
                <div className="flex-1 justify-around md:flex md:flex-col md:justify-between ml-4 md:ml-0">
                    <div className="flex flex-col md:flex-row">
                        <h4 className="font-semubold title-text-theme">{item.productName}</h4>
                        <p className="text-gray-600 darl:text-gray-200">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-200">Total: ${item.lineTotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-around md:justify-start">
                    <button 
                        onClick={handleDecrement}
                        // disabled={isUpdatingCart}
                        className="py-1 rounded disabed:opacity-50 cursor-pointer">
                            <CircleMinus className="text-gray-600 dark:text-gray-200 hover:text-amber-700" />
                    </button>
                    <span className="px-4 py-2 rounded title-text-theme">{item.quantity}</span>
                    <button 
                        onClick={handleIncrement}
                        // disabled={isUpdatingCart}
                        className="py-1 rounded disabed:opacity-50 cursor-pointer">
                            <CirclePlus className="text-gray-600 dark:text-gray-200 hover:text-blue-800" />
                    </button>
                    <button 
                        onClick={handleRemove}
                        // disabled={isRemovingFromCart}
                        className="px-3 py-1 rounded disabed:opacity-50 cursor-pointer">
                            <Trash2 className="text-red-600 dark:text-red-700 hover:opacity-50" />
                    </button>
                </div>
            </div> */}
        </div>
    )}
            // <div className="flex flex-row md:flex-col md:flex-6/12 lg:flex-4/12 md:content-center p-4 border-b main-border md:border-b-0">
            //----------------
                {/* <CardComponent 
                    title={item.productName} 
                    imageUrl={item.imageUrl}
                    price={item.price}
                    description=''
                >
                    <div className="flex items-center justify-around md:justify-start">
                        <button 
                            onClick={handleDecrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CircleMinus className="text-gray-600 dark:text-gray-200 hover:text-amber-700" />
                        </button>
                        <span className="px-4 py-2 rounded title-text-theme">{item.quantity}</span>
                        <button 
                            onClick={handleIncrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CirclePlus className="text-gray-600 dark:text-gray-200 hover:text-blue-800" />
                        </button>
                        <button 
                            onClick={handleRemove}
                            // disabled={isRemovingFromCart}
                            className="px-3 py-1 rounded disabed:opacity-50 cursor-pointer">
                                <Trash2 className="text-red-600 dark:text-red-700 hover:opacity-50" />
                        </button>
                    </div>
                </CardComponent> */}

                {/* // ---------------------------------------
                <div className="relative border-1 main-border product-image-bg rounded-xs
                shadow-sm overflow-hidden h-24 min-w-32 md:min-w-32 md:h-28">
                        <Image 
                            src={item.imageUrl}
                            alt={item.productName} 
                            placeholder='blur'
                            blurDataURL='...'
                            onError={(error) => console.log(error)}
                            fill={true}
                            objectFit='cover'
                        />
                </div>
                <div className="flex md:flex-col w-full">
                    <div className="flex-1 justify-around md:flex md:flex-col md:justify-between ml-4 md:ml-0">
                        <div className="flex flex-col md:flex-row">
                            <h4 className="font-semubold title-text-theme">{item.productName}</h4>
                            <p className="text-gray-600 darl:text-gray-200">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-200">Total: ${item.lineTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-around md:justify-start">
                        <button 
                            onClick={handleDecrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CircleMinus className="text-gray-600 dark:text-gray-200 hover:text-amber-700" />
                        </button>
                        <span className="px-4 py-2 rounded title-text-theme">{item.quantity}</span>
                        <button 
                            onClick={handleIncrement}
                            // disabled={isUpdatingCart}
                            className="py-1 rounded disabed:opacity-50 cursor-pointer">
                                <CirclePlus className="text-gray-600 dark:text-gray-200 hover:text-blue-800" />
                        </button>
                        <button 
                            onClick={handleRemove}
                            // disabled={isRemovingFromCart}
                            className="px-3 py-1 rounded disabed:opacity-50 cursor-pointer">
                                <Trash2 className="text-red-600 dark:text-red-700 hover:opacity-50" />
                        </button>
                    </div>
                </div> 
            </div> */}
//     )
// }