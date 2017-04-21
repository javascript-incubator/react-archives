import { CHANGE_CAMERA, CHANGE_SOL, CHANGE_PAGE } from './constants';

const HomeUiActions = [CHANGE_CAMERA, CHANGE_SOL, CHANGE_PAGE];

export function dispatchHomeUiAction(type, payload) {
  if (!HomeUiActions.includes(type)) {
    console.log('Home Action must have payload but dispatching action with your type anyways');//eslint-disable-line
    return { type };
  }
  return {
    type,
    payload,
  };
}
