import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import combinedReducer from 'reducers';
import App from 'containers/App';
import 'global/style';

let store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
