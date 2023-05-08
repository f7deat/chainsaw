import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import Leftbar from '@/components/layout/leftbar';
import Footer from '@/components/footer';
import RightBar from '@/components/layout/rightbar';
import '@/styles/globals.css';
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2500
  });
  }, []);
  
  return (
    <ConfigProvider
      locale={{
        locale: 'vi-VN',
      }}
      theme={{
        token: {
          fontSize: 16,
          colorText: '#0e1c71'
        },
        components: {
          Button: {
            borderRadius: 999,
            borderRadiusLG: 999
          }
        }
      }}>
      <Header />
      <div className='md:flex gap-10 pt-20'>
        {/* <aside className='hidden md:block h-screen z-10  left-0 top-16 w-[320px]'>
          <Leftbar />
        </aside> */}
        <main className='mx-auto container flex-1 p-4'>
          <Component {...pageProps} />
        </main>
        {/* <aside className='hidden md:block h-screen z-10  right-0 top-16  w-[320px]'>
          <RightBar />
        </aside> */}
      </div>
      <Footer />
    </ConfigProvider>
  )
}
