import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  :root {
    --theme-background: #E7EAEC;
    --secondary-operations: rgba(236, 238, 244, 0.5);
    --theme-primary: #DBE1F2;
    --theme-secondary: #F2D1DD;
    --font-primary: #A1A1A1;
    --font-secondary: #A3A3A3;
    --font-pads: #CCCADB;
    --font-pads-secondary: #CCCCCC;
    --font-result: #A1A1A1;
    --font-current: #A3A3A3;
  }

`

export default GlobalStyles
