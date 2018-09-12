/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import axios from 'axios';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
});
