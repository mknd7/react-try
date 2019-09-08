import React from 'react';
import { Global, css } from '@emotion/core'

import globalStyles from './components/styles/global';
import LikeButton from './components/likebutton';
import DigiClock from './components/digiclock';
import ToggleGroup from './components/togglegroup';

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
      <DigiClock styles={css
        `
          margin-bottom: 30px;
        `
      }/>
      <ToggleGroup label="Try this toggle!"/>
      <ToggleGroup label="This toggle is disabled" disabled />
    </div>
  );
}

export default Dashboard;
