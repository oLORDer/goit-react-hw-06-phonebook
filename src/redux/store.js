import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; for combine
import reducer from './reducer';

export const store = configureStore({ reducer });

// const store = configureStore({ reducer: rootReducer });
