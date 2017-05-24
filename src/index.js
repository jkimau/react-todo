import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import combinedReducer from 'reducers';
import AppContainer from 'containers/AppContainer';
import ListView from 'containers/ListView';
import CalendarView from 'containers/CalendarView';
import 'global/style';

let store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={AppContainer}/>
        <Route exact path="/" component={ListView}/>
        <Route path="/list" component={ListView}/>
        <Route path="/calendar" component={CalendarView}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
