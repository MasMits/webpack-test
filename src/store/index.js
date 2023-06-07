import {configureStore} from "@reduxjs/toolkit";
import formReducer from './slices/todo-input.slice';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

