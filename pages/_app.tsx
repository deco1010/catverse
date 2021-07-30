import * as React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Settings } from 'luxon'

import '~/styles/globals.css'
import store from '~/store/store'

import ProtectRoute from '~/components/ProtectRoute'

const MyApp: React.FC<AppProps> = (props: AppProps) => {
  // Set Luxon's Locale
  Settings.defaultLocale = 'en-EN'

  return (
    <Provider store={store}>
      <Head>
        <title>Pemantauan Vaksinasi</title>
        <meta name="description" content="Aplikasi Pemantauan Vaksinasi" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProtectRoute {...props} />
    </Provider>
  )
}

export default MyApp