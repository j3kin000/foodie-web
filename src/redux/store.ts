/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Action,
  Middleware,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "./root-reducer";
import { ThunkDispatch, ThunkMiddleware, thunk } from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

export type RootState = ReturnType<typeof rootReducer>;

export type TypedDispatch = ThunkDispatch<RootState, any, Action>;

const middleware: Middleware[] = [thunk as ThunkMiddleware<RootState, Action>];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
