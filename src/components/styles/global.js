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
    letter-spacing: 2px;
    margin: 40px;
  }
  button, input {
    font: inherit;
  }

  button {
    padding: 4px;
    width: 70px;
    background-color: #eee;
    border: 1px solid #bbb;
    border-radius: 3px;
    font-size: 16px;

    :active {
      background-color: #ccc;
    }
  }
`;

export default globalStyles;