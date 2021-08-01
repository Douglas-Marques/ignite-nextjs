import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import Header from '../components/Header'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
