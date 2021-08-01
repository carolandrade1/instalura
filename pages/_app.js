import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import IndexHead from '../src/components/commons/Head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <IndexHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}