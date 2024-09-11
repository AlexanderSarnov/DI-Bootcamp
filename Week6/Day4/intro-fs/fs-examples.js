// import fs from 'fs';
// !using ES6 import syntax, for this need to npm init -y to install required dependencies and add "type": "module" to package.json

const fs = require('fs'); // import fs module using Node.js's require syntax

// In order to read a file asynchronously, we use fs.promises.readFile()

// fs.promises
//     .readFile('data.txt', 'utf8') // 'data.txt' is the file we want to read, 'utf8' means we want to read it as a string
//     .then((data) => console.log(data)) // if the file is successfully read, the data will be logged to the console
//     .catch((error) => console.error('Error reading file:', error)); // if there's an error reading the file, it will be logged to the console

// // In order to write to a file asynchronously, we use fs.promises.writeFile()

// fs.promises
//     .writeFile('newData.txt', 'This is the new data') // 'newData.txt' is the file we want to write to, 'This is the new data' is the data we want to write
//     .then(() => console.log('Data written successfully')) // if the data is successfully written, a message will be logged to the console
//     .catch((error) => console.error('Error writing file:', error)); // if there's an error writing the file, it will be logged to the console

// // In order to append to a file asynchronously, we use fs.promises.appendFile()

// fs.promises
//     .appendFile('newData.txt', '\nThis is an additional line') // '\nThis is an additional line' is the data we want to append
//     .then(() => console.log('Data appended successfully')) // if the data is successfully appended, a message will be logged to the console
//     .catch((error) => console.error('Error appending file:', error)); // if there's an error appending the file, it will be logged to the console

// // In order to delete a file asynchronously, we use fs.promises.unlink()

// fs.promises
//     .unlink('newData.txt') // 'newData.txt' is the file we want to delete
//     .then(() => console.log('File deleted successfully')) // if the file is successfully deleted, a message will be logged to the console
//     .catch((error) => console.error('Error deleting file:', error)); // if there's an error deleting the file, it will be logged to the console

// // In order to check if a file exists asynchronously, we use fs.promises.access()

// fs.promises
//     .access('data.txt') // 'data.txt' is the file we want to check
//     .then(() => console.log('File exists')) // if the file exists, a message will be logged to the console
//     .catch((error) => {
//         if (error.code === 'ENOENT') {
//             console.log('File does not exist');
//         } else {
//             console.error('Error accessing file:', error);
//         }
//     });

// // In order to rename a file asynchronously, we use fs.promises.rename()

// fs.promises
//     .rename('data.txt', 'renamedData.txt') // 'data.txt' is the file we want to rename, 'renamedData.txt' is the new name we want to give it
//     .then(() => console.log('File renamed successfully')) // if the file is successfully renamed, a message will be logged to the console
//     .catch((error) => console.error('Error renaming file:', error)); // if there's an error renaming the file, it will be logged to the console

// // In order to create a directory asynchronously, we use fs.promises.mkdir()

// fs.promises
//     .mkdir('newDirectory', { recursive: true }) // 'newDirectory' is the directory we want to create, { recursive: true } makes it create any missing parent directories
//     .then(() => console.log('Directory created successfully')) // if the directory is successfully created, a message will be logged to the console
//     .catch((error) => console.error('Error creating directory:', error)); // if there's an error creating the directory, it will be logged to the console

// // In order to delete a directory asynchronously, we use fs.promises.rmdir()

// fs.promises
//     .rmdir('newDirectory', { recursive: true }) // 'newDirectory' is the directory we want to delete, { recursive: true } makes it delete all subdirectories and files as well
//     .then(() => console.log('Directory deleted successfully')) // if the directory is successfully deleted, a message will be logged to the console
//     .catch((error) => console.error('Error deleting directory:', error)); // if there's an error deleting the directory, it will be logged to the console

// // In order to check if a directory exists asynchronously, we use fs.promises.stat()

// fs.promises
//     .stat('newDirectory') // 'newDirectory' is the directory we want to check
//     .then((stats) => {
//         if (stats.isDirectory()) {
//             console.log('Directory exists');
//         } else {
//             console.log('Not a directory');
//         }
//     });

// // In order to check if a path is a file or a directory asynchronously, we use fs.promises.lstat()

// fs.promises
//     .lstat('newDirectory') // 'newDirectory' is the path we want to check
//     .then((stats) => {
//         if (stats.isFile()) {
//             console.log('File exists');
//         } else if (stats.isDirectory()) {
//             console.log('Directory exists');
//         } else {
//             console.log('Not a file or directory');
//         }
//     });

// ! By Ziv:

// *read
// try {
//     const data = fs.readFileSync('info.txt', 'utf8');
//     console.log(data);
// } catch (error) {
//     console.log('Error: ', error);
// }

// fs.readFile('info.txt', 'utf8', (error, data) => {
//     if (error) return console.log('Error: ', error);
//     console.log(data);
// });

// *write
// const data = 'This is some new data to append.\n';

// fs.writeFile('info.txt', data, { flag: 'a', encoding: 'utf-8' }, (error) => {
//     if (error) return console.log('Error: ', error);
//     console.log('Data appended successfully');
// });

// *write an object as JSON to a file
// const myObject = {
//     name: 'John Doe',
//     age: 30,
//     email: 'johndoe@example.com',
// };

// // Convert the object to a JSON string
// const jsonString = JSON.stringify(myObject, null, 2); // The second argument is for indentation

// fs.writeFile('myObject.json', jsonString, 'utf-8', (error) => {
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('JSON file has been saved.');
//     }
// });

// *parse JSON from a file
// fs.readFile('myObject.json', 'utf-8', (error, data) => {
//     console.log(JSON.parse(data));
// }); // in this case error in not defined because of laziness.

// *update a file
// fs.appendFile('info.txt', '\nThis is an additional line.\n', 'utf-8', (error) => {console.log(error); });

// *copy a file
fs.copyFile('info.txt', 'backup.txt', (error) => {}); // creates a backup.txt file

