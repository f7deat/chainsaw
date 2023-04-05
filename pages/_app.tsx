import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { Quicksand } from 'next/font/google'

// const quickSand = Quicksand({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '700']
//  })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
