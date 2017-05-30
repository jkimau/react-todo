import { combineReducers } from 'redux';
import todoState from './todos';

const combinedReducers = combineReducers({
  todoState
})

export default combinedReducers;
