import {combineReducers} from 'redux';
import FetchExhibitionsReducer from './fetchExhibitionsReducer';
import FetchFloorReducer from './fetchFloorReducer';
import InputEditFieldsReducer from './inputEditFieldsReducer';
import FetchProgramsReducer from './fetchProgramsReducer';
import AddingProgramRecuder from './addingProgramsReducer';
import EditingProgramReducer from './editingProgramsReducer';
import DeletingProgramReducer from './deletingProgramsReducer';

export default combineReducers({
    exhibitions: FetchExhibitionsReducer,
    floor: FetchFloorReducer,
    input: InputEditFieldsReducer,
    programs: FetchProgramsReducer,
    addingPrograms: AddingProgramRecuder,
    editingPrograms: EditingProgramReducer,
    deletingPrograms: DeletingProgramReducer
});