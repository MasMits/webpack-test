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
            options: [],
            // options: ['Frontend developer', 'Backend developer', 'Designer', 'QA'],
            activeOption: null,
            error: 'Not Selected',
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
            state.fields.role.activeOption = action.payload;
            state.fields.role.error = '';
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsSubmitting: (state, action) => {
            state.isSubmitting = action.payload;
        },
        setOptions: (state, action) => {
            console.log('setOptions')
            console.log(action)
            // const a = [
            // {id: 1, name: 'Lawyer'},
            // {id: 2, name: 'Content manager'},
            // {id: 3, name: 'Security'},
            // {id: 4, name: 'Designer'}]

            state.fields.role.options = [...action.payload];
        },
    },
});

export const {
    setFieldValue,
    setFieldError,
    setRole,
    setError,
    setIsSubmitting,
    setOptions,
} = formSlice.actions;

export default formSlice.reducer;
