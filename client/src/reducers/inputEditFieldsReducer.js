import {EDITING_DISABLED} from '../actions/types';

const INTIAL_STATE = {
    audioLinkValue: '',
    editDisabled: false
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case EDITING_DISABLED:
         return { ...state, editDisabled: action.payload }
        default:
            return state;
    }
}