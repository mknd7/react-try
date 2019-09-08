import { css } from '@emotion/core';

const toggleStyles = {
  wrapper: css
  `
    margin-bottom: 10px;
    > * { vertical-align: middle; }

    > label {
      display: inline-block;
      font-size: 14px;
      margin-right: 20px;
    }
  `,

  button: css
  `
    display: inline-block;
    width: 60px;
    height: 28px;
    background-color: #ddd;
    border: 1px solid #bbb;
    border-radius: 14px;
    position: relative;
    cursor: pointer;

    > span {
      position: absolute;
      top: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.5);
      transition: 0.2s;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,

  switchedOff: css
  `
    left: 4px;
    background-color: #fff;
  `,

  switchedOn: css
  `
    left: 36px;
    background-color: #62aacc;
  `
};

export default toggleStyles;
