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
    background: var(--theme-background);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --theme-background: #E7EAEC;
    --theme-primary: #F2D1DD;
    --theme-secondary: #DBE1F2;
    --secondary-operations: rgba(236, 238, 244, 0.5);

    --font-primary-color: #A1A1A1;
    --font-pads-color: #CCCADB;

    --primary-width: 450px;
    --pad-width: 90px;
    --pad-height: 90px;
    --navbar-height: 53px;

    --default-font-size: 35px;
    --seconrady-font-size: 18px;
    --result-font-size: 52px;

  }

`

export default GlobalStyles
