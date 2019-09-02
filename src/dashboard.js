import React from 'react';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

import LikeButton from './components/likebutton';
import DigiClock from './components/digiclock';
import globalStyles from './components/styles/global';

function Dashboard() {
  return (
    <div id="dashboard">
      <Global styles={globalStyles} />
      <LikeButton styles={css
        `
          display: block;
          margin-bottom: 20px;
        `}
      />
      <DigiClock />
    </div>
  );
}

export default Dashboard;
