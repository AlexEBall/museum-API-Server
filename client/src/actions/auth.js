import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// by passing in formProps and not deconstructing
// we can just pass in the object to axios 2nd arg

export const signup = (formProps, callback) => async dispatch => {
    try {
        // this is where we are posting to the backend api
        const response = await axios.post('https://stormy-shelf-62092.herokuapp.com/api/cafamAuth/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        
        // store in local storage to persist login state
        localStorage.setItem('token', response.data.token);


        // make sure user gets redirected
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signout = () => {
    // clean out the authenticated jwt token
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        // this is where we are posting to the backend api
        const response = await axios.post('https://stormy-shelf-62092.herokuapp.com/api/cafamAuth/signin', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        
        // store in local storage to persist login state
        localStorage.setItem('token', response.data.token);


        // make sure user gets redirected
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
};