import { readFile, writeFile } from './fileManager.js';

const readFileName = './helloWorld.txt';
const writeFileName = './byeWorld.txt';
const fileBody = 'Writing to the file';

readFile(readFileName, 'utf8')
  .then(data => console.log(data))
  .catch(error => console.error('Error reading a file:', error));

writeFile(writeFileName, fileBody)
  .then(() => console.log('File written successfully'))
  .catch(error => console.error('Error writing a file:', error));

readFile(readFileName);
