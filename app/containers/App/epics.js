import { CHANGE_CAMERA } from '../HomePage/constants';
import { loadImages } from './actions';

export const rootEpic = (action$) => action$.ofType(CHANGE_CAMERA).mapTo(loadImages());
 // $ means observable
