import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    title: 'Hello',
    error: false
};

const formSlice = createSlice({
    name: 'todoInput',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {setTitle, setError} = formSlice.actions;
export default formSlice.reducer;
