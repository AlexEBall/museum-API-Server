import API from '../utils/API';
import {FETCHING_EXHIBITIONS_START, FETCHING_EXHIBITIONS_ERROR, RECIEVE_EXHIBITIONS} from './types';

// pass in API name to reduce number of exports... but what about two calls?
export const fetchExhibitions = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_EXHIBITIONS_START})
        API
            .getExhibitions()
            .then((res) => {
                dispatch({type: RECIEVE_EXHIBITIONS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_EXHIBITIONS_ERROR, payload: err})
            })
    }
};