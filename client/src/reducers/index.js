import {combineReducers} from 'redux';
import FetchExhibitionsReducer from './fetchExhibitionsReducer';

export default combineReducers({
    exhibitions: FetchExhibitionsReducer
});