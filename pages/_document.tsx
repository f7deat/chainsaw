import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from 'next/script'

function MyDocument() {
  return (
    <Html lang="vi">
      <Head>
      <meta name="google-site-verification" content="Xr2_noi_Vicla6EW34W0S2yQiESZGMMrglcjO_yRWnk" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKVN88HD3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZKVN88HD3J');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default MyDocument;