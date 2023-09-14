import { ConfigProvider, FloatButton } from 'antd'
import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentUser } from '@/services/user';
import theme from '@/theme/themeConfig';
import { AppContext } from '@/models/app-context';
import { PhoneOutlined } from '@ant-design/icons';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  const [user, setUser] = useState<API.User>();

  const login = useCallback(() => {
    getCurrentUser().then(response => {
      setUser(response.data)
    })
  }, [])

  useEffect(() => {
    login()
  }, [login])

  const contextValue = useMemo<any>(() => ({
    user,
    login
  }), [user, login])


  return (
    <ConfigProvider
      locale={{
        locale: 'vi-VN',
      }}
      theme={theme}>
      <AppContext.Provider value={contextValue}>
        <Header />
        <div className='md:flex gap-10 md:pt-32 pt-20'>
          <main className='mx-auto container flex-1 p-4'>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
        <FloatButton.Group>
          <div className='mb-4'>
            <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"></span>
            <FloatButton icon={<PhoneOutlined />} type='primary' onClick={() => window.location.href = 'tel:0762559696'} />
          </div>
          <FloatButton.BackTop />
        </FloatButton.Group>
      </AppContext.Provider>
    </ConfigProvider>
  )
}
