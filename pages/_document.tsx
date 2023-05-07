import Footer from '@/components/footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="vi">
      <Head />
      <body className='bg-slate-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
