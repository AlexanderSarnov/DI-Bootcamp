import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Store the result in a variable
const directoryPath = __dirname;

// Read directory and display its contents
try {
  const files = await fs.readdir(directoryPath);
  files.forEach((file) => {
    console.log(file);
  });
} catch (err) {
  console.error('Unable to scan directory:', err);
}
