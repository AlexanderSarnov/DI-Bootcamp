import { CHANGE_TEXT } from './textAction.js';

const initialState = {
    text: 'State Counter from Store',
};

export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, text: action.text };
        default:
            return state;
    }
};
