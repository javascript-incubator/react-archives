import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'; //eslint-disable-line
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_IMAGES, LOAD_MANIFEST, LOAD_MANIFEST_SUCCESS } from 'containers/App/constants';
import { imageLoadingSuccess, imageLoadingError, manifestLoadingSuccess, manifestLoadingError, loadImages, setTotalPhotosForCurrentSol } from 'containers/App/actions';
import request from 'utils/request';
import { delay } from 'redux-saga';
import { cameraSelector, pageSelector, solSelector } from 'containers/HomePage/selectors'; //eslint-disable-line
import { manifestTransformer } from '../App/transformers';
import { CHANGE_SOL, CHANGE_CAMERA, APIKEY, DEMOKEY, CHANGE_PAGE } from './constants'; //eslint-disable-line

/**
 * Root saga manages watcher lifecycle
 */
export function* mrData() {
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
}

// Bootstrap sagas
export default [
  mrData,
];
