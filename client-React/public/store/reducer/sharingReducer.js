"use strict"
import actionTypes from "../action/actionTypes";

const initialState = { sharings: [] };

export default function sharingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADSHARINGS:
      return Object.assign({}, state, {
        sharings: action.sharings
      })
    default:
      return state
  }
};