import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from 'redux-thunk';
import reducers from '../reducers';

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};
 
const persistedReducers = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducers, {}, compose(applyMiddleware(thunk)))
const persistor = persistStore(store)

export {store, persistor}
