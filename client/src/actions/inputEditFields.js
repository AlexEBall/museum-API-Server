import {EDITING_DISABLED, AUDIO_LINK_UPDATE} from './types';

export const editingDisabled = (value) => {
    return {
        type: EDITING_DISABLED,
        payload: value
    }
}

export const audioLinkOnChange = (value) => {
    return {
        type: AUDIO_LINK_UPDATE,
        payload: value
    }
}