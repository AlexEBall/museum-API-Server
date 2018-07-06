import {
    TYPING_PROGRAM_TITLE, 
    PROGRAM_ADDED, 
    TYPING_PROGRAM_PICTURE, 
    TYPING_PROGRAM_DESCRIPTION, 
    TYPING_PROGRAM_PRICE, 
    TYPING_PROGRAM_TIME, 
    TYPING_PROGRAM_MEMBER_INFO, 
    TYPING_PROGRAM_REGISTRATION_LINK
} from '../actions/types';

const INTIAL_STATE = { 
    title: '',
    picture: '',
    price: '',
    description: '',
    time: '',
    memberInfo: '',
    registrationLink: ''
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case TYPING_PROGRAM_TITLE:
            return {...state, title: action.payload }
        case TYPING_PROGRAM_PICTURE:
            return {...state, picture: action.payload }
        case TYPING_PROGRAM_DESCRIPTION:
            return {...state, description: action.payload }
        case TYPING_PROGRAM_PRICE:
            return {...state, price: action.payload }
        case TYPING_PROGRAM_TIME:
            return {...state, time: action.payload }
        case TYPING_PROGRAM_MEMBER_INFO:
            return {...state, memberInfo: action.payload }
        case TYPING_PROGRAM_REGISTRATION_LINK:
            return {...state, registrationLink: action.payload }
        default:
            return state
    }
}