import Footer from '@/components/footer';
import { StyleProvider } from '@ant-design/cssinjs';
import MenuHeader from '@/components/layout/menu-header'
import RightContent from '@/components/layout/right-content'
import '@/styles/globals.css'
import { FireTwoTone } from '@ant-design/icons'
import { ProLayout } from '@ant-design/pro-components'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider

      locale={{
        locale: 'vi-VN',
      }}
      theme={{
        token: {
          
        },
        components: {
          Button: {
            borderRadius: 999,
            borderRadiusLG: 999
          }
        }
      }}>
      <StyleProvider hashPriority='high'>
        <ProLayout
          logo={<FireTwoTone color='#1677ff' />}
          title="E-Learning"
          layout='top'
          fixedHeader={true}
          footerRender={() => <Footer />}
          rightContentRender={() => <RightContent />}
          // waterMarkProps={{
          //   content: 'GETVISA.VN'
          // }}
          menuHeaderRender={() => <MenuHeader />}
          contentWidth="Fluid"
        >
          <div className='container mx-auto'>
            <Component {...pageProps} />
          </div>
        </ProLayout>
      </StyleProvider>
    </ConfigProvider>
  )
}
