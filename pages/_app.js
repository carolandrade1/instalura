import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeLight, ThemeDark } from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import IndexHead from '../src/components/commons/Head';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <IndexHead />
      <ThemeProvider theme={theme === 'light' ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}
