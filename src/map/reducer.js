import reducer from '../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  SETEXTENT: (s, a) => ({ ...s, extent: a.payload }),
  MAPLOADED: (s, a) => ({ ...s, loaded: true })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  extent: null,
  loaded: false
}

export default reducer(initialState, ACTION_HANDLERS)
