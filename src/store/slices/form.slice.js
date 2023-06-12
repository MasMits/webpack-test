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
        file: '',
        role: '',
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
            state.fields[field].error = error;
        },
        setFile: (state, action) => {
            console.log(action.payload)
            state.fields.file = action.payload;
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
        resetForm: (state) => {
            Object.keys(state.fields).forEach((field) => {
                state.fields[field].value = '';
                state.fields[field].error = null;
            });
            state.error = null;
            state.isSubmitting = false;
        },
    },
});

export const {
    setFieldValue,
    setFieldError,
    setFile,
    setRole,
    setError,
    setIsSubmitting,
    resetForm,
} = formSlice.actions;

export default formSlice.reducer;
