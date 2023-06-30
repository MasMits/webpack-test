import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    pages: 1,
    isLoading: true,
    isShowMore: true,
    error: ''
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.users.push(...action.payload);
        },
        resetUsers: (state) => {
            state.isLoading = true;
            state.error = null;
            state.users = [];
        },
        fetchUsersError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        pagesIncrimination: (state) => {
            state.pages = state.pages + 1;
        },
        resetPages: (state) => {
            state.pages = 1;
        },
        setIsShowMore: (state, action) => {
            state.isShowMore = action.payload;
        },
    },
});

export const { fetchUsersSuccess, resetUsers, fetchUsersError, pagesIncrimination, resetPages, setIsShowMore} = userSlice.actions;
export default userSlice.reducer;
