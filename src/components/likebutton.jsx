import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import style from './styles/like';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    return (
      <button 
        css={[style, this.props.styles]}
        onClick={
          () => this.setState({
            liked: !this.state.liked
          })}
      >
        {(this.state.liked) ? 'Unlike' : 'Like'}
      </button>
    );
  }
}

export default LikeButton;
