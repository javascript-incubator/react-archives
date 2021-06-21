/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const imagesSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('images')
);

const globalGenericSelector = (key) => createSelector(
  selectGlobal,
  (globalState) => globalState.get(key)
);

const loadingImagesSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingImages')
);

const loadImageErrorSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadImageError')
);

const loadImageSuccessSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn('loadImageSuccess')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  imagesSelector,
  loadingImagesSelector,
  loadImageErrorSelector,
  loadImageSuccessSelector,
  makeSelectLocationState,
  globalGenericSelector,
};
