import { CHANGE_SOL } from './constants';
import { loadImages } from '../App/actions';

export const solEpic = (action$) => // $ means observable
  action$
  .ofType(CHANGE_SOL)
  .filter((action) => action.payload !== '')
  .debounceTime(500)
  .mapTo(loadImages());

export default [
  solEpic,
];
