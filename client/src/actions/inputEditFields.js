import API from '../utils/API';
import {
    EDITING_DISABLED, 
    AUDIO_LINK_UPDATE, 
    AUDIO_LINK_SAVED, 
    IMG_EDITING_DISABLED,
    IMG_LINK_UPDATE,
    IMG_LINK_SAVED
} from './types';

export const imgEditingDisabled = (boolean) => {
    return {
        type: IMG_EDITING_DISABLED,
        payload: boolean
    }
}

export const editingDisabled = (boolean) => {
    return {
        type: EDITING_DISABLED,
        payload: boolean
    }
}

export const imgLinkOnChange = (text) => {
    return {
        type: IMG_LINK_UPDATE,
        payload: text
    }
}

export const imgLinkUpdating = (input, position, floor) => {
    // console.log(`My ${input} and my ${position}`);
    return (dispatch) => {
        API
        .updateAnImgLink(input, position, floor)
        .then((res) => {
            console.log(res);
            dispatch({ type: IMG_LINK_SAVED });
        }).catch(err => {
            console.log(err);
        })
    }

}

export const audioLinkOnChange = (text) => {
    return {
        type: AUDIO_LINK_UPDATE,
        payload: text
    }
}

export const audioLinkUpdating = (input, floor) => {
    console.log('My input:::', input + ' and my floor:::', floor);
    return (dispatch) => {
        API
        .updateAudioLink(input, floor)
        .then((res) => {
            console.log(res);
            dispatch({ type: AUDIO_LINK_SAVED });
        }).catch(err => {
            console.log(err);
        })
    }
}