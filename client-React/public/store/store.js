'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coreReducer from './reducer/coreReducer';

export default createStore(coreReducer, applyMiddleware(thunk));
