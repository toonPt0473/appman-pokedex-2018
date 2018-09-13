import React, { Component } from 'react';

export default class OutsideAlerter extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutOfFocus()
    }
  }

  render() {
    const { children, onOutOfFocus, ...rest } = this.props
    return (
      <div
        ref={this.setWrapperRef}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

