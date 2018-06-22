import API from '../utils/API';
import {FETCHING_EXHIBITIONS_START, FETCHING_EXHIBITIONS_ERROR, RECIEVE_EXHIBITIONS} from './types';

export const fetchExhibitions = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_EXHIBITIONS_START})
        API
            .getExhibitions()
            .then((res) => {
                // console.log(res);
                dispatch({type: RECIEVE_EXHIBITIONS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_EXHIBITIONS_ERROR, payload: err})
            })
    }
};