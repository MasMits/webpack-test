import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    pages: 1,
    isLoading: true,
    error: ''
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersStart: (state) => {
            state.isLoading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.users.push(...action.payload);
        },
        fetchUsersError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        PagesIncrimination: (state) => {
            state.pages = state.pages + 1;
        },
    },
});

export const fetchUsers = (page = 1) => {
    return async (dispatch) => {
        dispatch(fetchUsersStart());
        try {
            const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
            const data = await response.json();
            console.log(data);
            dispatch(fetchUsersSuccess(data.users));
            dispatch(PagesIncrimination());
        } catch (error) {
            dispatch(fetchUsersError(error));
        }
    };
};

export const {fetchUsersStart, fetchUsersSuccess, fetchUsersError, PagesIncrimination} = userSlice.actions;
export default userSlice.reducer;
