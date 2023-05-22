import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getUser } from '@/services/user';
import { UserContext } from '@/models/user';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  const [user, setUser] = useState<API.User>();

  const login = useCallback(() => {
    getUser().then(response => {
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
      <UserContext.Provider value={contextValue}>
        <Header />
        <div className='md:flex gap-10 pt-32'>
          <main className='mx-auto container flex-1 p-4'>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </UserContext.Provider>
    </ConfigProvider>
  )
}
