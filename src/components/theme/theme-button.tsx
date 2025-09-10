'use client'
import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeButtonComponent = () => {
    const { theme, setTheme } = useTheme()
    
    const toggleTheme = () => {
        console.log("Current theme:", theme)
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return <SunMoon 
            onClick={toggleTheme}
            className="cursor-pointer hover:opacity-80 transform inline-block w-6 h-6" 
        />
}