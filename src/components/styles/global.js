import { css } from '@emotion/core';

const globalStyles = css
`
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    line-height: 1.2;
    margin: 40px;
  }
  button, input {
    font: inherit;
  }
`;

export default globalStyles;