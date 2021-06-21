import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'; //eslint-disable-line
import { cameraSelector, pageSelector, solSelector } from 'containers/HomePage/selectors'; //eslint-disable-line
import { CHANGE_SOL, CHANGE_CAMERA, APIKEY, DEMOKEY, CHANGE_PAGE } from './constants'; //eslint-disable-line

/**
 * Root saga manages watcher lifecycle
 */

// Bootstrap sagas
export default [
];
