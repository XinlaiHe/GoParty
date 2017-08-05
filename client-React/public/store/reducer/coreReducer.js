"use strict";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import sidebarReducer from "./sidebarReducer";

const coreReducer = combineReducers({
	userReducer,
	sidebarReducer
})

export default coreReducer;