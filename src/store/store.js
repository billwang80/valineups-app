import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';

import inputReducer from '../reducers/inputReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  inputReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
// export const store = createStore(inputReducer)

// export {
//   store,
//   persistor,
// }
