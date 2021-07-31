import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta http-equiv="content-language" content="pt-br, en-US" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Next.js, JAMStack, Alura, Instalura" />
        <meta name="author" content="Carol Andrade Santos" />
        <meta name="description" content="Site Instalura" />

        <meta property="og:url" content="https://instalura-cas.vercel.app/" />
        <meta property="og:title" content="Site Instalura" />
        <meta property="og:site_name" content="Instalura" />
        <meta property="og:image" content="https://www.alura.com.br/assets/img/bootcamp/front-end-jamstack/og-image.1616501197.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" /> 
        <meta property="og:image:height" content="600" />
        <meta property="og:description" content="Vem conferir o projeto do Bootcamp Front-End Avançado da Alura!" />
        
        <title>Instalura</title>
        <link rel="icon" sizes="32x32" href="https://i.postimg.cc/pVmd1F18/alura-Iconalura-Icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}