import {EDIT_DISABLED} from '../actions/types';

const INTIAL_STATE = {
    editDisabled: false
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case EDIT_DISABLED:
         return { ...state, editDisabled: action.payload }
        default:
            return state;
    }
}