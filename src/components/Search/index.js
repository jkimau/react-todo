import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const style = {};
    if (this.props.width) {
      style.width = this.props.width;
    }
    return (
      <div style={style}>
        <input type="text" placeholder="Please enter keywordss" />
      </div>
    )
  }
}
