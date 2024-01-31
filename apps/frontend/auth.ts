import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { logger } from '@/api/lib/logger'
import { checkCredentials } from '@/api/requests/users'
import { CheckCredentialsSchemaType } from '@/types/schemas'
import { AxiosError } from 'axios'

export const PUBLIC_ROUTES = ['/login', '/error']

export const config = {
  providers: [
    /*
        GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }), */
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'credentials',
      name: 'credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        logger.debug('Checking credentials', { credentials })
        try {
          const user = (
            await checkCredentials(
              credentials as unknown as CheckCredentialsSchemaType,
            )
          )
          logger.debug('Getting user data', { user })

          return user as any
        } catch (error) {
          const e = error as AxiosError
          logger.debug('[ERROR]: response from backend', {
            response: e.response,
          })
          throw new Error(JSON.stringify(e?.response?.data ?? {}))
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/error',
    error: '/error',
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl

      if (PUBLIC_ROUTES.includes(pathname)) return true

      return !!auth
    },
    jwt({ user, token }) {
      if (user) {
        token.user = user
      }
      return token
    },

    session({ token, session }) {
      const currentSession = session as any
      currentSession.account = token?.user
      return currentSession
    },
  },
  secret: process.env.SECRET,
  debug: false,
  // debug: process.env.NODE_ENV === 'development',
  logger: {
    error: (code, ...message) => {
      logger.error(code, ...message)
    },
    warn: (code, ...message) => {
      logger.warn(code, ...message)
    },
    debug: (code, ...message) => {
      logger.debug(code, ...message)
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
