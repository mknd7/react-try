import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

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
        css={this.props.styles}
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
