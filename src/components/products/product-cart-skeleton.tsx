export default function ProductCardSkeleton() {
    return (
        <div className="flex flex-col animate-pulse flex-1/5">
            <div className="relative border-1 border-background/20 dark:border-foreground/50 product-image-bg rounded-t-sm
                min-w-80 h-60 bg-background/60 shadow-inner animate-pulse">
            </div>
            <div className="bg-gray-500/70 dark:bg-gray-500/10 p-3 border-1 border-gray-400/20 shadow-lg animate-pulse">
                <div className="flex text-left text-color-theme justify-between">
                    <h4 className="text-sm lg:text:md font-semibold mb-1 animate-pulse bg-foreground/50 text-foreground/50 blur-xs w-1/2 h-6 rounded-lg py-0.5 px-2">Lorem Ipsum</h4>
                </div>
                <p className="text-color-theme mb-1 text-left text-xs lg:text-sm blur-xs bg-foreground/50 text-foreground/50 w-full h-4 rounded-lg py-0.5 px-2">lorem ipusm is back with loader</p>
                <div className="flex items-center content-center gap-6 justify-between">
                    <p className="text-sm lg:text-md animate-pulse blur-xs">12345.00</p>
                    <div className="mt-2 px-3 py-2 disabled:opacity-50 cursor-pointer 
                        rounded-sm bg-foreground/60 hover:bg-background/20 hover:shadow-inner animate-pulse w-8 h-8">
                    </div>
                </div>
            </div>
        </div>
    )
}