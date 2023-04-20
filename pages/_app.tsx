import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/Card.module.css'
import '../styles/responsive.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
