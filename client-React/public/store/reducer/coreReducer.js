"use strict";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import sidebarReducer from "./sidebarReducer";
import partyReducer from "./partyReducer";

const coreReducer = combineReducers({
	userReducer,
	sidebarReducer,
	partyReducer
})

export default coreReducer;