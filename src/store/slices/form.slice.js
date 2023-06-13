import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    fields: {
        name: {
            value: '',
            error: null,
        },
        email: {
            value: '',
            error: null,
        },
        phone: {
            value: '',
            error: null,
        },
        file: {
            value: '',
            error: null,
        },
        role: {
            value: null,
            error: '',
        },
    },
    error: null,
    isSubmitting: false,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFieldValue: (state, action) => {
            const {field, value = ''} = action.payload;
            state.fields[field].value = value;
        },
        setFieldError: (state, action) => {
            const {field, error} = action.payload;
            console.log(error);
            state.fields[field].error = error;
        },
        setRole: (state, action) => {
            state.fields.role = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsSubmitting: (state, action) => {
            state.isSubmitting = action.payload;
        },
    },
});

export const {
    setFieldValue,
    setFieldError,
    setRole,
    setError,
    setIsSubmitting,
} = formSlice.actions;

export default formSlice.reducer;
