export const INCREMENT = 'add';
export const DECREMENT = 'minus';

export const add = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

export const minus = () => {
    return {
        type: DECREMENT,
    };
};
