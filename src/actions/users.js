import {
    fetchUsersError,
    fetchUsersSuccess,
    pagesIncrimination,
    resetPages,
    setIsShowMore
} from "../store/slices/users.slice";

export const fetchUsers = (page = 1) => {
    console.log(process.env.API_URL);
    return async (dispatch) => {
        try {
            const response = await fetch(`${process.env.API_URL}/users?page=${page}&count=6`);
            const data = await response.json();
            console.log(data);
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
