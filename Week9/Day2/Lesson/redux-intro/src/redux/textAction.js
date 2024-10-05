export const CHANGE_TEXT = 'change-text';

export const changeTitle = (value) => {
    return {
        type: CHANGE_TEXT,
        text: value,
    };
};
