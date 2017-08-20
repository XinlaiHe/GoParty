"use strict"
import actionTypes from "../action/actionTypes";

const initialState = { parties: [] };

export default function partyReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOADPARTIES:
      return Object.assign({}, state, {
        parties: action.parties
      })
    default:
      return state
  }
};