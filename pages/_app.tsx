import type { AppProps /*, AppContext */ } from 'next/app'
import './index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}