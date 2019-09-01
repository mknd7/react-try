import { css } from '@emotion/core';

const clockStyles = {
  wrapper: css
  `
    display: inline-block;
    padding: 10px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.6);
    border-radius: 6px;
    font-size: 30px;
    letter-spacing: 2px;

    > span {
      vertical-align: middle;
    }

    > button {
      margin-left: 20px;
      width: 60px;
      background-color: #eee;
      border: 1px solid #bbb;
      border-radius: 3px;
      font-size: 14px;
      vertical-align: middle;

      :active {
        background-color: #ccc;
      }
    }
  `
};

export default clockStyles;
