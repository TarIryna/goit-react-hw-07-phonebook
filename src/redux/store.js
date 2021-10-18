import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactApi } from "./contacts/contactsSlice";
import filter from "./contacts/filterSlice";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts/contacts-reducer';

// const ContactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(ContactsPersistConfig, contactsReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { store, persistor };
