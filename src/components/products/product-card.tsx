// import { useCart } from '@/hooks/cart/useCart'
// import type { AddToCartPayloadType } from '@/types/cart'
import { useCartContext } from '@/hooks/useCart'
import { AddToCartPayloadType } from '@/types/cart'
import type { ProductType } from '@/types/products'
import { throttle } from '@/lib/common'
// import { CircularProgress } from '@mui/material'
import type { UUID } from 'crypto'
import { useState } from 'react'
// import { toast } from 'sonner'
// import AddIcon from '@mui/icons-material/Add'
import { GoPlus } from 'react-icons/go'
import { CardComponent } from '../ui/card'
import { CART_ERRORS } from '@/constants/errors'

export const ProductCard = ({ product }: { product: ProductType}) => {
    // const [id, setId] = useState<UUID | null>(null)

    const {
        addItemToCart, 
        getCartId, 
        // isAddingToCart, 
        // retreiveCartItemIdByProductId,
        incrementQuantity,
    } = useCartContext()
    
    

    const handleAddToCart = async () => {
            const cartId = getCartId()
            if (!cartId) {
                // toast.error('Cannot add to cart, Cart Id is not generated!')
                console.error(CART_ERRORS.NOT_AVAILABLE)
                return
            }

            // setId(product.productId)
            // const { productId } = product
            // const item = cart?.items.find(c => c.productId === productId)
    
            // if (item) {
            //     incrementQuantity(cartItemId)
            // }

            // if (cartItemId) {
            //     toast.info('Item is already available in Cart!')
            //     incrementQuantity(cartItemId)
            //     toast.success('Item quantity incremented by 1 in cart')
            //     return
            // }
            const cartItem: AddToCartPayloadType = {
                cartId: cartId as UUID, 
                productId: product.productId,
                quantity: 1
            }
            await addItemToCart(cartItem)       
    }

    // const isLoading = () => id === product.productId && isAddingToCart

    const throttleHandler = throttle(handleAddToCart)
    return (
        <div className="flex flex-col min-w-[412px] sm:w-42 md:w-56 lg:w-66 xl:w-86">
            <CardComponent 
                imageUrl={product.imageUrl}
                title={product.name}
                price={product.price}
                description={product.description}
            >
                <button 
                    onClick={throttleHandler}
                    // disabled={isLoading()}
                    className="mt-2 px-3 py-2 disabled:opacity-50 cursor-pointer 
                        rounded-sm bg-background/30 hover:bg-background/50 hover:shadow-inner"
                >
                    <GoPlus />
                    {/* { isLoading() ? <CircularProgress size={12} color="inherit"/> : <AddIcon />} */}
                </button>
            </CardComponent>
        </div>
        // <div className="md:flex-6/12 lg:flex-4/12 p-4 flex flex-col gap-2 w-32 sm:w-42 md:w-56 lg:w-66 xl:w-86">
        // <div className="p-4 flex flex-col gap-2 w-32 sm:w-42 md:w-56 lg:w-66 xl:w-86">
        //     <div className="relative border-1 main-border product-image-bg rounded-xs shadow-sm w-32 sm:w-42 md:w-56 lg:w-66 xl:w-86 h-32 sm:h-42 md:h-56 lg:min-h-66 xl:h-86">
        //         {/* <img 
        //             src={product.imageUrl} 
        //             alt={product.name} 
        //             className="product-image"
        //         /> */}
        //         <Image 
        //             src={product.imageUrl} 
        //             alt={product.name} 
        //             placeholder='blur'
        //             blurDataURL='...'
        //             onError={(error) => console.log(error)}
        //             fill={true}
        //             objectFit='cover'
        //         />
        //     </div>
        //     <div className="flex text-left text-color-theme justify-between">
        //         <h4 className="text-sm lg:text:md font-semibold mb-1">{ product.name }</h4>
        //         <p className="text-sm lg:text-md">${ product.price.toFixed(2) }</p>
        //     </div>
        //     <div className="flex items-center content-center gap-6 justify-between">
        //         <p className="text-color-theme mb-1 text-left text-xs lg:text-sm">{ getDescription() }</p>
        //         <button 
        //             onClick={throttleHandler}
        //             // disabled={isLoading()}
        //             className="mt-2 button-color-theme text-color-on-gray px-3 py-2 roundeddisabled:opacity-50 cursor-pointer rounded-sm"
        //         >
        //             <Plus />
        //             {/* { isLoading() ? <CircularProgress size={12} color="inherit"/> : <AddIcon />} */}
        //         </button>
        //     </div>
        // </div>
    )
}