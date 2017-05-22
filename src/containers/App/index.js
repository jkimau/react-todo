import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import ListView from 'containers/ListView';
import CalendarView from 'containers/CalendarView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (<Redirect to="/list"/>)}/>
          <Route path="/list" component={ListView}/>
          <Route path="/calendar" component={CalendarView}/>
        </div>
      </Router>
    )
  }
}

export default App;
