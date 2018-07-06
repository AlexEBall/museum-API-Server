import {combineReducers} from 'redux';
import FetchExhibitionsReducer from './fetchExhibitionsReducer';
import FetchFloorReducer from './fetchFloorReducer';
import InputEditFieldsReducer from './inputEditFieldsReducer';
import FetchProgramsReducer from './fetchProgramsReducer';

export default combineReducers({
    exhibitions: FetchExhibitionsReducer,
    floor: FetchFloorReducer,
    input: InputEditFieldsReducer,
    programs: FetchProgramsReducer
});