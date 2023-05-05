import Footer from '@/components/footer'
import { Header } from '@/components/header'
import RightContent from '@/components/layout/right-content'
import '@/styles/globals.css'
import { FireTwoTone } from '@ant-design/icons'
import { ProLayout } from '@ant-design/pro-components'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ConfigProvider
        theme={{
        }}
        locale={{
          locale: 'vi-VN'
        }}>
        <ProLayout
          logo={<FireTwoTone color='#1677ff' />}
          title="E-Learning"
          layout='top'
          fixedHeader={true}
          footerRender={() => <Footer />}
          rightContentRender={() => <RightContent />}
          waterMarkProps={{
            content: 'GETVISA.VN'
          }}
          menuHeaderRender={() => <Header />}
          contentWidth="Fixed"
        >
          <Component {...pageProps} />
        </ProLayout>
      </ConfigProvider>
    </main>
  )
}
