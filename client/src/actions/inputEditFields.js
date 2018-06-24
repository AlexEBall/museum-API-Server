import {EDIT_DISABLED} from './inputEditFields';

export const editDisabled = (value) => {
    return {
        type: 'edit_disabled',
        payload: value
    }
}