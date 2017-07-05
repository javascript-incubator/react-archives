// Global Reducer
import { fromJS } from 'immutable';

import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_MANIFEST,
  LOAD_MANIFEST_ERROR,
  LOAD_MANIFEST_SUCCESS,
  SET_TOTAL_PHOTOS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  images: [],
  loadImageSuccess: false,
  loadImageError: false,
  loadingImages: false,
  loadingManifest: false,
  loadingManifestError: false,
  loadingManifestSuccess: false,
  missionManifest: [],
  maxPhotos: 0,
  totalPhotosForCurrentSol: 0,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_IMAGES:
      return state.set('loadingImages', true);
    case LOAD_MANIFEST:
      return state.set('loadingManifest', true);
    case LOAD_IMAGES_SUCCESS:
      return state.set('images', action.images).set('loadingImages', false).set('loadImageSuccess', true);
    case LOAD_IMAGES_ERROR:
      return state.set('loadImageError', true).set('loadingImages', false);
    case LOAD_MANIFEST_SUCCESS:
      return state.set('loadingManifestSuccess', true).set('loadingManifest', false).set('missionManifest', action.manifest).set('maxPhotos', Math.max(...action.manifest));
    case LOAD_MANIFEST_ERROR:
      return state.set('loadingManifestError', true).set('loadingManifest', false);
    case SET_TOTAL_PHOTOS:
      return state.set('totalPhotosForCurrentSol', state.get('missionManifest')[action.sol].photos);
    default:
      return state;
  }
}

export default appReducer;
