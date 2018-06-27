import {
    EDITING_DISABLED, 
    AUDIO_LINK_UPDATE, 
    AUDIO_LINK_SAVED, 
    IMG_EDITING_DISABLED,
    IMG_LINK_UPDATE
} from '../actions/types';

const INTIAL_STATE = {
    audioLinkValue: '',
    editDisabled: false,
    imgLinkValue: '',
    imgEditDisabled: false
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case EDITING_DISABLED:
            return { ...state, editDisabled: action.payload }
        case IMG_EDITING_DISABLED:
            return { ...state, imgEditDisabled: action.payload }
        case IMG_LINK_UPDATE:
            return { ...state, imgLinkValue: action.payload }
        case AUDIO_LINK_UPDATE:
            return { ...state, audioLinkValue: action.payload }
        case AUDIO_LINK_SAVED:
            return { INTIAL_STATE }
        default:
            return state;
    }
}