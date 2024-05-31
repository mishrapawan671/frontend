import { LoginLogoutReducer } from "../reducers/AuthReducer";
import { CartReducer } from "../reducers/CartReducers";
import LoaderReducer from "../reducers/LoaderReducer"

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createTransform from "redux-persist/es/createTransform";



/** thunk middleware automatically applied when e create store using confgure store */
// const store=configureStore({
//     reducer:{
//         LoginLogoutReducer,
//         CartReducer
//     }})
// export default store;


const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
     
    return inboundState;
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    return outboundState;
  },
  // define which reducers this transform gets called for.
  { whitelist: ['LoginLogoutReducer'] }
);

/**Persistor config */
const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 ,// see "Merge Process" section for details.
 transforms: [SetTransform],
 blacklist: ['CartReducer'] 
};


const reducers=combineReducers({
      LoginLogoutReducer:LoginLogoutReducer,
       CartReducer: CartReducer,
       LoaderReducer:LoaderReducer
})





const pReducer = persistReducer(persistConfig, reducers);

 export const store = configureStore({
    reducer:pReducer
 });
 export const persistor = persistStore(store);

