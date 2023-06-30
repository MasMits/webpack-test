import {setOptions} from "../store/slices/form.slice";


export const fetchPositions = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${process.env.API}/positions`);
            const data = await response.json();
            dispatch(setOptions(data.positions))
        } catch (error) {
            console.error(error);
        }
    };
};
