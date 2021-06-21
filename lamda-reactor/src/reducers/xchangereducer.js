import { XCHANGESUCCESS, XCHANGEFAILURE, XCHANGEBASES } from '../constants/actiontypes';
import objectAssign from 'object-assign';
import initialState from './initialstate';
import { keysMapper,xchangeMapper } from '../utils/keysmapper';

export default function jiffReducer(state = initialState.xchange, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {

  case XCHANGESUCCESS:
    return objectAssign({}, newState, { xchanges: xchangeMapper(action.data.rates), noResult: false });

  case XCHANGEFAILURE:
    return objectAssign({}, newState, { xchanges: [], noResult: false });

  case XCHANGEBASES:
    return objectAssign({}, newState, { xChangesBases: keysMapper(action.data.rates,'EUR'), xchanges: xchangeMapper(action.data.rates) });

  default:
    return state;
  }
}
