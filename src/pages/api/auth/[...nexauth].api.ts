import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [],
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
