import {
    fetchUsersError,
    fetchUsersStart,
    fetchUsersSuccess,
    pagesIncrimination,
    resetPages,
    setIsShowMore
} from "../slices/users.slice";

export const fetchUsers = (page = 1) => {
    return async (dispatch) => {
        dispatch(fetchUsersStart());
        try {
            const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
            const data = await response.json();
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
