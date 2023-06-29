import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import userSlice from './slices/users.slice';
import formReducer from "./slices/form.slice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

