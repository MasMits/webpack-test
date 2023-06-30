import {setOptions} from "../store/slices/form.slice";


export const fetchPositions = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
            const data = await response.json();
            dispatch(setOptions(data.positions))
        } catch (error) {
            console.error(error);
        }
    };
};
