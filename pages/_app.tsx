import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'

const quickSand = Quicksand({
  subsets: ['vietnamese']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quickSand.className}>
      <Component {...pageProps} />
    </main>
  )
}
