import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeLight, ThemeDark } from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import IndexHead from '../src/components/commons/Head';
import IconTheme, { ToggleButton } from '../src/components/foundation/Toggle';

export default function App({ Component, pageProps }) {
  
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };
  
  return (
    <>
      <IndexHead />
      <ThemeProvider theme={theme === "light" ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <ToggleButton onClick={themeToggle}>
          <IconTheme theme={theme} />
        </ToggleButton>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}