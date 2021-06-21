import * as types from '../constants/actiontypes';
import * as api from '../constants/remoteresources';

export const jiffsearch = (searchText) => dispatch =>
  dispatch({type:types.SEARCHFORJIFF}) &&
  searchText ?
  fetch(api.GIPHYURL(searchText)).then(result => result.json()).then(data =>
    data.data.length ?
    dispatch({
      type: types.JIFFSEARCHSUCCESS,
      data: data.data
    }) :
    dispatch({
      type: types.JIFFNORESULTS
    })
  ) :
  dispatch({
    type: types.JIFFNOTHINGTOSEARCH
  });
