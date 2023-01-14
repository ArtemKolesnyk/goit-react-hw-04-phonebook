import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1,
  h2 {
    color: teal;
    display: flex;
    justify-content: center;
  }

  section {
    width: 600px;
    border: 4px solid lightblue;
    box-shadow: 0px 5px 10px yellow;
    padding: 25px;
    margin: auto;
  }
`;

export default AppStyled;