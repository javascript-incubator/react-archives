import { combineReducers } from 'redux'
import notifierReducer from '../connectors/notifier/reducer'
import mapReducer from '../map/reducer'

export const makeRootReducer = () => {
  return combineReducers({
    notify: notifierReducer,
    home: mapReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
