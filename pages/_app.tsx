import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import Leftbar from '@/components/layout/leftbar';
import Footer from '@/components/footer';
import RightBar from '@/components/layout/rightbar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      locale={{
        locale: 'vi-VN',
      }}
      theme={{
        token: {
          fontSize: 16,
        },
        components: {
          Button: {
            borderRadius: 999,
            borderRadiusLG: 999
          }
        }
      }}>
      <Header />
      <aside className='hidden md:block h-screen z-10 fixed left-0 top-16 w-52'>
        <Leftbar />
      </aside>
      <main className='mx-auto bg-slate-100 container p-4'>
        <div className='md:px-40 md:py-20'>
          <Component {...pageProps} />
        </div>
      </main>
      <aside className='hidden md:block h-screen z-10 fixed right-0 top-16 w-52'>
          <RightBar />
      </aside>
        <Footer />
    </ConfigProvider>
  )
}
