import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";


const persistedBalanceReducer = persistReducer(
    {
        key: 'balance',
        storage,
        whitelist: ['value']
    },    
    balanceReducer
);

const persistedLocalReducer = persistReducer(
    {
        key: 'locale',
        storage,
    },
    localeReducer
)

export const store = configureStore({
    reducer: {
        balance: persistedBalanceReducer,
        locale: persistedLocalReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store);