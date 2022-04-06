import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../app/store'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
