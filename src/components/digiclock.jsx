import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles/digiclock';

class DigiClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.getCurrentTime(),
      paused: false,
      showGMT: false
    };
  }

  getCurrentTime() {
    let date = new Date();
    if(this.state && this.state.showGMT) {
      date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    }
    return {
      hours: String(date.getHours()).padStart(2, '0'),
      minutes: String(date.getMinutes()).padStart(2, '0'),
      seconds: String(date.getSeconds()).padStart(2, '0')
    };
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getCurrentTime()
      })
    }, 1000);
  }

  handlePause() {
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.startInterval();
    }
    this.setState({
      paused: !this.state.paused
    });
  }

  handleGMT() {
    if(this.state.paused) { this.handlePause(); }
    this.setState({
      showGMT: !this.state.showGMT
    });
  }

  render() {
    let time = this.state.time;
    return (
      <div css={styles.wrapper}>
        <span>{time.hours}</span>
        :
        <span>{time.minutes}</span>
        :
        <span>{time.seconds}</span>
        <button onClick={() => this.handlePause()}>
          {this.state.paused ? 'Reset' : 'Pause'}
        </button>
        <button onClick={() => this.handleGMT()}>
          {this.state.showGMT ? 'Show Local time' : 'Show GMT time'}
        </button>
      </div>
    );  
  }
}

export default DigiClock;
