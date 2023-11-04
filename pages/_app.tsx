import { ConfigProvider, FloatButton, Layout } from 'antd'
import type { AppProps } from 'next/app';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentUser } from '@/services/user';
import theme from '@/theme/themeConfig';
import { AppContext } from '@/models/app-context';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import MyHeader from '@/components/header/header';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  const [user, setUser] = useState<API.User>();

  const login = useCallback(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return;
    }
    getCurrentUser().then(response => {
      setUser(response?.data)
    })
  }, [])

  useEffect(() => {
    login()
  }, [login])

  const contextValue = useMemo<any>(() => ({
    user,
    login
  }), [user, login])

  const { Content } = Layout;

  return (
    <ConfigProvider
      locale={{
        locale: 'vi-VN',
      }}
      theme={theme}>
      <AppContext.Provider value={contextValue}>
        <Layout>
          <MyHeader />
          <Content className='container mx-auto py-4 md:py-10 px-2 md:px-0'>
              <Component {...pageProps} />
          </Content>
          <Footer />
          <FloatButton.Group>
            <div className='mb-4'>
              <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"></span>
              <FloatButton icon={<PhoneOutlined />} type='primary' onClick={() => window.location.href = 'tel:0762559696'} />
              <FloatButton icon={<MessageOutlined />} onClick={() => window.location.href = 'https://zalo.me/0762559696'} />
            </div>
            <FloatButton.BackTop />
          </FloatButton.Group>
        </Layout>
      </AppContext.Provider>
    </ConfigProvider>
  )
}
