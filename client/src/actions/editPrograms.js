import API from '../utils/API';
import {
    TYPING_PROGRAM_TITLE,
    PROGRAM_ADDED,
    TYPING_PROGRAM_PICTURE,
    TYPING_PROGRAM_DESCRIPTION,
    TYPING_PROGRAM_PRICE,
    TYPING_PROGRAM_TIME,
    TYPING_PROGRAM_MEMBER_INFO,
    TYPING_PROGRAM_REGISTRATION_LINK
} from './types';

export const addingProgramInputFieldOnChange = (name, text) => {
    if (name === 'title') {
        return {
            type: TYPING_PROGRAM_TITLE,
            payload: text
        }
    } else if (name === 'picture') {
        return {
            type: TYPING_PROGRAM_PICTURE,
            payload: text
        }
    } else if (name === 'description') {
        return {
            type: TYPING_PROGRAM_DESCRIPTION,
            payload: text
        }
    } else if (name === 'price') {
        return {
            type: TYPING_PROGRAM_PRICE,
            payload: text
        }
    } else if (name === 'time') {
        return {
            type: TYPING_PROGRAM_TIME,
            payload: text
        }
    } else if (name === 'memberInfo') {
        return {
            type: TYPING_PROGRAM_MEMBER_INFO,
            payload: text
        }
    } else if (name === 'registrationLink') {
        return {
            type: TYPING_PROGRAM_REGISTRATION_LINK,
            payload: text
        }
    }

}