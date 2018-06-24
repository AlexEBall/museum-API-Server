import API from '../utils/API';
import {EDITING_DISABLED, AUDIO_LINK_UPDATE, AUDIO_LINK_SAVED} from './types';

export const editingDisabled = (boolean) => {
    return {
        type: EDITING_DISABLED,
        payload: boolean
    }
}

export const audioLinkOnChange = (text) => {
    return {
        type: AUDIO_LINK_UPDATE,
        payload: text
    }
}

export const audioLinkUpdating = (input, floor) => {
    return (dispatch) => {
        API
        .updateAudioLink(input, floor)
        .then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
}