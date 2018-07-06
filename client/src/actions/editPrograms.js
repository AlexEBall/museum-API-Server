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
    // if (name === 'title') {
    //     return {
    //         type: TYPING_PROGRAM_TITLE,
    //         payload: text
    //     }
    // } else if
    switch(name) {
        case 'title':
            return {
                type: TYPING_PROGRAM_TITLE,
                payload: text
            }
        case 'picture':
            return {
                type: TYPING_PROGRAM_PICTURE,
                payload: text
            }
        case 'description':
            return {
                type: TYPING_PROGRAM_DESCRIPTION,
                payload: text
            }
        case 'price':
            return {
                type: TYPING_PROGRAM_PRICE,
                payload: text
            }
        case 'time':
            return {
                type: TYPING_PROGRAM_TIME,
                payload: text
            }
        case 'memberInfo':
            return {
                type: TYPING_PROGRAM_MEMBER_INFO,
                payload: text
            }
        case 'registrationLink':
            return {
                type: TYPING_PROGRAM_REGISTRATION_LINK,
                payload: text
            }
    }
}