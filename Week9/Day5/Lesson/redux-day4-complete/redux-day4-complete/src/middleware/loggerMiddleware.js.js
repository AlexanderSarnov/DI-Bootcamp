// loggerMiddleware.js
const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next State:', store.getState());
    return result;
};

export default loggerMiddleware;

// export const logger = (store) => (next) => (action) => {
//     console.log('prev state => ', store.getState());
//     console.log('action => ', action);
//     next(action);
//     console.log('current state =>', current);
//     return result;
// };
