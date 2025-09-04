import { Copyright } from 'lucide-react'
export default function Footer() {
    const copyRightContext = new Date().getFullYear() + " AtoZ Store. All Rights Reserved."
    return (
        <footer className="text-center py-4 text-sm border-t/40 shadow-inner text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center content-center gap-2 text-neutral-700 dark:text-neutral-200">
                <Copyright />
                <span>{copyRightContext}</span>
            </div>
        </footer>
    )
}