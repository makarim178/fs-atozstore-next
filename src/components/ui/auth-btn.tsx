'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa6'


export const AuthBtn = () => {
    const { data: session } = useSession()
    
    if (!session) {
        signIn('anonymous', { redirect: false })
    }

    if (session) {
        return (
            <>
                Not signed in as {session.user?.email} <br/>
                <button className='bg-background/30 dark:bg-foreground/10 flex p-4 justify-center items-center gap-4 mt-4 rounded-sm shadow dark:shadow-inner cursor-pointer' onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in? <br/>
            <button className='bg-background/30 dark:bg-foreground/10 flex p-4 justify-center items-center gap-4 mt-4 rounded-sm shadow dark:shadow-inner cursor-pointer' onClick={() => signIn()}>Sign in with Github <FaGithub className='text-2xl' /></button>
        </>
    )
}