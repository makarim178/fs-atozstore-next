import Link from "next/link"

export const NavigationBtn = ({ navLink }: { navLink: string }) => {
    return (
        <Link 
            href={navLink}
            className="py-3 px-6 bg-background/20 dark:bg-foreground/10 cursor-pointer shadow-md dark:shadow-none hover:bg-background/30 dark:hover:bg-foreground/20 text-xs md:text-md lg:text-lg">
                Click to Order more items.
        </Link>
    )
}