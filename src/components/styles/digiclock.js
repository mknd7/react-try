import { css } from '@emotion/core';

const clockStyles = {
  wrapper: css
  `
    display: inline-block;
    padding: 10px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.6);
    border-radius: 6px;
    font-size: 30px;

    > span {
      vertical-align: middle;
    }

    > button {
      margin-left: 20px;
      vertical-align: middle;
    }
  `
};

export default clockStyles;
