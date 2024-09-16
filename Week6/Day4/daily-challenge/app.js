import { greet } from './greeting.js';
import { displayColorMessage, displayAnotherColorMessage } from './colorful-message.js';
import { read_file } from './read-file.js';

console.log(displayColorMessage(greet('Lily')));
console.log(displayAnotherColorMessage(greet('Dan')));

try {
    let data = await read_file('.files/file-data.txt');
    console.log(displayColorMessage(data));
} catch (error) {
    console.log(displayAnotherColorMessage('Error reading file'));
}
