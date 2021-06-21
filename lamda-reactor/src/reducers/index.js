import { combineReducers } from 'redux';
import jiffapp from './jiffreducer';
import xchange from './xchangereducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  jiffapp,
  xchange,
  routing: routerReducer
});

export default rootReducer;
