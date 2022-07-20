import { ThemeProvider } from 'styled-components';
import { useState } from 'react'

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Test</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
