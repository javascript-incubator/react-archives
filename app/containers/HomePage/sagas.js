/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'; //eslint-disable-line
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_IMAGES, LOAD_MANIFEST } from 'containers/App/constants';
import { imageLoadingSuccess, imageLoadingError, manifestLoadingSuccess, manifestLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { cameraSelector, pageSelector, solSelector } from 'containers/HomePage/selectors'; //eslint-disable-line
import { manifestTransformer } from '../App/transformers';

/**
 * Github repos request/response handler
 */
export function* getImages() {
  // Select username from store
  const camera = yield select(cameraSelector());
  const page = yield select(pageSelector());
  const sol = yield select(solSelector());
  let requestURL = '';
  if (camera === 'ALL CAMS') {
    requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=zoRMstTUapz7r991Ob6ZxjU1VFE7rZSzsJaiohw7`;
  } else {
    requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=zoRMstTUapz7r991Ob6ZxjU1VFE7rZSzsJaiohw7`;
  }

  try {
    // Call our request helper (see 'utils/request')
    const images = yield call(request, requestURL);
    yield put(imageLoadingSuccess(images.photos));
  } catch (err) {
    yield put(imageLoadingError(err));
  }
}

export function* getMissionManifest() {
  // Select username from store
  const requestURL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=zoRMstTUapz7r991Ob6ZxjU1VFE7rZSzsJaiohw7';

  try {
    // Call our request helper (see 'utils/request')
    const manifest = yield call(request, requestURL);
    yield put(manifestLoadingSuccess(manifestTransformer(manifest.photo_manifest)));
  } catch (err) {
    yield put(manifestLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* mrData() {
  const watcher = yield takeLatest(LOAD_IMAGES, getImages);
  const manifestCallWatcher = yield takeLatest(LOAD_MANIFEST, getMissionManifest);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(manifestCallWatcher);
}

// Bootstrap sagas
export default [
  mrData,
];
