// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  transaction: transactionReducer,
  user:userReducer
});

export default rootReducer;
