import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'

import { Nunito } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

const nunito = Nunito({
  weight: ['400', '500'],
  subsets: ['latin'],
})

globalStyles()

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <div className={nunito.className}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </div>
  )
}
