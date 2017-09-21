"use strict";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import sidebarReducer from "./sidebarReducer";
import sharingReducer from "./sharingReducer";

const coreReducer = combineReducers({
	userReducer,
	sidebarReducer,
	sharingReducer
})

export default coreReducer;