import {combineReducers} from 'redux';
import fetchExhibitions from './fetchExhibitionsReducer';

export default combineReducers({
    exhibitions: fetchExhibitions
});