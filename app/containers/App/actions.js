import { LOAD_IMAGES, LOAD_IMAGES_SUCCESS, LOAD_IMAGES_ERROR, LOAD_MANIFEST, LOAD_MANIFEST_SUCCESS, LOAD_MANIFEST_ERROR } from './constants';


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

export function imageLoadingError(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error,
  };
}
