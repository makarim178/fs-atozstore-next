import { cadFormatter } from "@/constants/common"
import { CardPropsType } from "@/types/props"
import Image from 'next/image'

export const CardComponent = ({ children, imageUrl, title, price, description }: CardPropsType) => {
    const getDescription = () => {
        if (description.length > 80) {
            return description.slice(0, 80).trim() + "..."
        }
        return description        
    }
    //sm:w-42 md:w-56 lg:w-66 xl:w-86 h-32 sm:h-42 md:h-56 lg:min-h-66 xl:h-86
    return (
        <>
            <div className="relative border-1 border-background/20 dark:border-foreground/50 product-image-bg rounded-sm
                min-w-[412px] min-h-[425px] bg-foreground dark:bg-background shadow-inner">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    placeholder='blur'
                    blurDataURL='...'
                    onError={(error) => console.log(error)}
                    sizes="min-width: 400px"
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className="bg-gray-500/10 p-3 border-1 border-gray-400/20 shadow-lg">
                <div className="flex text-left text-color-theme justify-between">
                    <h4 className="text-sm lg:text:md font-semibold mb-1">{ title }</h4>
                </div>
                <p className="text-color-theme mb-1 text-left text-xs lg:text-sm">{ getDescription() }</p>
                <div className="flex items-center content-center gap-6 justify-between">
                    <p className="text-sm lg:text-md"> { cadFormatter.format(price) }</p>
                    {children}
                </div>
            </div>
        </>
    )
}