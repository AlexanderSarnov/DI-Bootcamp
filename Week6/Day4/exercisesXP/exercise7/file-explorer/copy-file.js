import * as fs from 'fs';

const log = console.log;
const error = console.error;

// Write to source.txt
fs.promises
  .writeFile('source.txt', 'This is a source content.')
  .then(() => log('Data written successfully.'))
  .catch((err) => {
    error('Error writing file:', err);
    throw err; // Re-throw the error to stop further execution
  })
  .then(() => {
    // Read from source.txt
    return fs.promises.readFile('source.txt', 'utf8');
  })
  .then((data) => {
    log(data);
    // Write to destination.txt
    return fs.promises.writeFile('destination.txt', data);
  })
  .then(() => log('Destination data written successfully.'))
  .catch((err) => error('Error during file operations:', err));
