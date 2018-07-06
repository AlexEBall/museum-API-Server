import API from '../utils/API';
import {FETCHING_PROGRAMS_START, FETCHING_PROGRAMS_ERROR, RECIEVE_PROGRAMS} from './types';

export const fetchPrograms = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_PROGRAMS_START})
        API
            .getPrograms()
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVE_PROGRAMS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_PROGRAMS_ERROR, payload: err})
            })
    }
};