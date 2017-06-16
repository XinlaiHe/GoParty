"use strict";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";

const coreReducer = combineReducers({
	userReducer
})

export default coreReducer;