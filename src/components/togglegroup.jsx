import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles/togglegroup';

class ToggleGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onOrOff: false,
      disabled: props.disabled || false,
      label: props.label
    }

    this.handleClick = this.handleClick.bind(this);
  }

  toggleButton(props) {
    return (
      <div css={styles.button} onClick={props.onClick} className={props.disabled ? 'disabled' : ''}>
        <span css={props.switch ? styles.switchedOn : styles.switchedOff}></span>
      </div>
    )
  }

  handleClick() {
    if(this.state.disabled) { return; }
    this.setState(state => ({
      onOrOff: !state.onOrOff
    }));
  }

  render() {
    const ToggleButton = this.toggleButton;

    return (
      <div css={styles.wrapper}>
        <label>{this.state.label}</label>
        <ToggleButton 
          switch={this.state.onOrOff}
          onClick={this.handleClick}
          disabled={this.state.disabled}
        />
      </div>
    )
  }
}

export default ToggleGroup;
