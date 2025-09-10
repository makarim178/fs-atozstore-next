import NextAuth, { DefaultSession, SessionStrategy } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { createId } from '@paralleldrive/cuid2'
import GithubProvider from 'next-auth/providers/github'
import type { User, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      isAnonymous?: boolean
    } & DefaultSession['user']
  }

  interface User {
    id: string
    isAnonymous: boolean
  }
}

// Extend the built-in JWT types
declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    isAnonymous: boolean
  }
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'anonymous',
            name: 'Anonymous',
            credentials: {},
            async authorize(credentials, req) {
                const anonymousUser = {
                    id: createId(),
                    name: 'Guest',
                    email: null,
                    isAnonymous: true
                }
                return anonymousUser
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        }),
    ],
    session: {
        strategy: 'jwt' as SessionStrategy
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User }) {
            if (user) {
                token.id = user.id
                token.isAnonymous = user.isAnonymous
            }
            return token
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (token?.id) {
                session.user.id = token.id
                session.user.isAnonymous = token.isAnonymous
            }
            return session
        }
    }
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}