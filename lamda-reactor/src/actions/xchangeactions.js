import * as types from '../constants/actiontypes';
import * as api from '../constants/remoteresources';

export const makeXChange = exchangeBase => dispatch =>
  exchangeBase ?
  fetch(api.FIXERURL(exchangeBase)).then(result => result.json()).then(data =>
    dispatch({
      type: types.XCHANGESUCCESS,
      data: data
    })) :
  dispatch({
    type: types.XCHANGEFAILURE
  });

export const getAllXchanges = () => dispatch =>
  fetch(api.FIXERURL()).then(result => result.json()).then(data =>
    dispatch({
      type: types.XCHANGEBASES,
      data: data
    })
  );
