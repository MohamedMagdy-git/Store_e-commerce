import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import FavReducer from './FavSlice'






import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// const stripe = require('stripe')('sk_test_51O5qbYIYuur9q7uyEXAMmR5ssfZISRwkO5LeRN1OHrzysVayt6ndAkiSgfTfAGaDz4FWqyso4GTqJsAA8NuLxXO7000v3okKXS');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)
const persistedFavReducer = persistReducer(persistConfig, FavReducer)

export const store = configureStore({
  reducer: {cart :persistedReducer, fav : persistedFavReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)