import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>Saba Samkharadze</title>
      <Head>
        <meta name="description" content="Fullstack/Frontend developer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saba Samkharadze" />
        <meta property="og:title" content="Saba Samkharadze" />
        <meta property="og:description" content="Fullstack/Frontend developer" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
