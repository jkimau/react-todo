import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AppContainer from 'containers/AppContainer';
import ListView from 'containers/ListView';
import CalendarView from 'containers/CalendarView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={AppContainer}/>
          <Route exact path="/" component={ListView}/>
          <Route path="/list" component={ListView}/>
          <Route path="/calendar" component={CalendarView}/>
        </div>
      </Router>
    )
  }
}

export default App;
