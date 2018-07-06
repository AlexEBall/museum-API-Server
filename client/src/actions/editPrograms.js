import API from '../utils/API';
import {
    TYPING_PROGRAM_INPUT_FIELDS_TO_ADD,
    PROGRAM_ADDED
} from './types';

export const addingProgramInputFieldOnChange = (name, text) => {
    switch(name) {
        case name === 'title': 
            return {
                type: TYPING_PROGRAM_INPUT_FIELDS_TO_ADD,
                payload: text
            }
    }
}