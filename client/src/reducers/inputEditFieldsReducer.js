import {EDITING_DISABLED, AUDIO_LINK_UPDATE} from '../actions/types';

const INTIAL_STATE = {
    audioLinkValue: '',
    editDisabled: false
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case EDITING_DISABLED:
            return { ...state, editDisabled: action.payload }
        case AUDIO_LINK_UPDATE:
            return { ...state, audioLinkValue: action.payload }
        default:
            return state;
    }
}