import { LOAD_IMAGES, LOAD_IMAGES_SUCCESS, LOAD_IMAGES_ERROR, LOAD_MANIFEST, LOAD_MANIFEST_SUCCESS, LOAD_MANIFEST_ERROR, SET_TOTAL_PHOTOS } from './constants';


export function loadImages() {
  return {
    type: LOAD_IMAGES,
  };
}

export function loadMissionManifest() {
  return {
    type: LOAD_MANIFEST,
  };
}

export function manifestLoadingSuccess(manifest) {
  return {
    type: LOAD_MANIFEST_SUCCESS,
    manifest,
  };
}

export function manifestLoadingError(error) {
  return {
    type: LOAD_MANIFEST_ERROR,
    error,
  };
}

export function imageLoadingSuccess(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images,
  };
}

export function setTotalPhotosForCurrentSol(sol) {
  return {
    type: SET_TOTAL_PHOTOS,
    sol,
  };
}

export function imageLoadingError(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error,
  };
}
