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
  }

  toggleButton(props) {
    return (
      <div css={styles.button} onClick={props.onClick} className={props.disabled ? 'disabled' : ''}>
        <span css={props.switch ? styles.switchedOn : styles.switchedOff}></span>
      </div>
    )
  }

  render() {
    const ToggleButton = this.toggleButton;
    return (
      <div css={styles.wrapper}>
        <label>{this.state.label}</label>
        <ToggleButton 
          switch={this.state.onOrOff}
          onClick={
            () => {
              if(this.state.disabled) { return; }
              this.setState(state => ({
                onOrOff: !state.onOrOff
              }))
            }
          }
          disabled={this.state.disabled}
        />
      </div>
    )
  }
}

export default ToggleGroup;
