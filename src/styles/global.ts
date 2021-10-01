import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    max-width: 100vw;
    scrollbar-color: dark;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.1em;
    overflow-x: hidden;
    background-color: #212935;
    color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    margin: 0;
    width: 100%;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
   background: #707881;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #212935;
    border-radius: 20px;
    border: 1px solid #707881;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

/*
  #707881;
  #29313d;
  #222a36;
  #676cdb;
  #3bafca;
  #212935;
  #EFB357;
  #F86A60;
  #76BE53;
  */

export default GlobalStyle;
