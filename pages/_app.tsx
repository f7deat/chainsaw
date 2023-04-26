import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'

const quickSand = Quicksand({
  subsets: ['vietnamese']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quickSand.className}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '__Quicksand_6543ae',
            colorPrimary: '#fd5631'
          }
        }}
        locale={{
          locale: 'vi-VN'
        }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </main>
  )
}
