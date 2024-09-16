// export const greet = (name) => {
//     return "Hello, " + name;
// };

const greet = (name) => {
    return 'Hello, ' + name;
};

module.export = {
    greet,
};

// if there is an app with lots of common js export mofules - use *.cjs extension for the file so that it will work in newer environments.
