import React, { Component } from 'react';
import './button.css';
class Button extends Component {
  render() {
    const { show, change } = this.props;
    return (
      <button
        className="btn"
        onClick={change}
        style={{ marginLeft: show ? '200px' : '0px' }}
      >
        按钮
      </button>
    );
  }
}

export default Button;
