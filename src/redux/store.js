import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = { key: 'contacts', storage, whitelist: ['items'] };

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
