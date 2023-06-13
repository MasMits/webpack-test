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

export const fetchUsers = (page = 1) => {
    return async (dispatch) => {
        dispatch(fetchUsersStart());
        try {
            const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
            const data = await response.json();
            console.log(data);
            console.log('page');
            console.log(page);
            dispatch(fetchUsersSuccess(data.users));
            if(page === 1){
                dispatch(resetPages());
            }

            dispatch(pagesIncrimination());
            dispatch(setIsShowMore(page < data.total_pages));

        } catch (error) {
            dispatch(fetchUsersError(error));
        }
    };
};

export const {fetchUsersStart, fetchUsersSuccess, fetchUsersError, pagesIncrimination, resetPages, setIsShowMore} = userSlice.actions;
export default userSlice.reducer;
