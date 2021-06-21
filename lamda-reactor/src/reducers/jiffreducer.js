import { JIFFSEARCHSUCCESS, JIFFNOTHINGTOSEARCH, JIFFNORESULTS, SEARCHFORJIFF } from '../constants/actiontypes';
import objectAssign from 'object-assign';
import initialState from './initialstate';

export default function jiffReducer(state = initialState.jiffapp, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {

  case SEARCHFORJIFF:
    return objectAssign({}, newState, { jiffs: [], noResult: false, noSearch: false });

  case JIFFSEARCHSUCCESS:
    return objectAssign({}, newState, { jiffs: action.data, noResult: false, noSearch: false });

  case JIFFNOTHINGTOSEARCH:
    return objectAssign({}, newState, { jiffs: [], noResult: false, noSearch: true });

  case JIFFNORESULTS:
    return objectAssign({}, newState, { jiffs: [], noResult: true, noSearch: false });

  default:
    return state;
  }
}
