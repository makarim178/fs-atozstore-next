import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import NextAuth, { getServerSession } from 'next-auth'

const handler = NextAuth(authOptions)

export { handler as GET , handler  as POST}
export { authOptions }
export const auth = () => getServerSession(authOptions)