import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const cameraSelector = () => createSelector(
  selectHome,
  (homeState) => homeState.get('camera')
);

const pageSelector = () => createSelector(
  selectHome,
  (homeState) => homeState.get('page')
);

const solSelector = () => createSelector(
  selectHome,
  (homeState) => homeState.get('sol')
);

export {
  selectHome,
  cameraSelector,
  pageSelector,
  solSelector,
};
