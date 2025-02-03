import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import chatReducer from './reducers/chatReducer';
import rootSaga from "./saga";

//Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    chat: chatReducer, // Our chat reducer handles chat messages and state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Adding the Saga middleware
});

sagaMiddleware.run(rootSaga); // Run the root saga to handle side effects

export default store;