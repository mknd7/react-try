import { css } from '@emotion/core';

const likeStyles = css
`
  width: 60px;
  height: 20px;
  background-color: #eee;
  border: 1px solid #bbb;
  border-radius: 3px;

  :active {
    background-color: #ccc;
  }
`;

export default likeStyles;
