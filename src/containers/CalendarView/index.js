import React, { Component } from 'react';
import { connect } from 'react-redux'

class CalendarView extends Component {
  render() {
    console.log('props: ', this.props);
    return (
      <h1>Calendar view page</h1>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return todos;
};

export default connect(mapStateToProps)(CalendarView);
