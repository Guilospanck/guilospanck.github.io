import { createGlobalStyle } from 'styled-components'

export const BODY_BG_COLOR = '#000'
export const TEXT_COLOR_0_7_WHITE = 'hsla(0,0%,100%,0.7)'
export const CONTENT_BG_COLOR_ALMOST_BLACK = '#1d2226'
export const BREADCUMB_BG_COLOR = '#2d3134'
export const BREADCUMB_BG_COLOR_HOVER = '#4f5356'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Finlandica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
