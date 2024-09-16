import * as fs from 'fs/promises';
// import fs ES6 style
import * as path from 'path';
// import path ES6 style

// reading a file
async function readFile() {
  try {
    const data  = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

// writing a file
async function writeFile() {
  try {
    await fs.writeFile('example.txt', 'Hello, world!', 'utf8');
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

// deleting a File
async function deleteFile() {
  try {
    await fs.unlink('example.txt');
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
}

async function readDirectory() {
  try {
    const files = await fs.readdir('./')
    console.log('Current directory filenames:');
    files.forEach(file => {
      console.log(file);
    });
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

// Running the functions
writeFile();
// using setTimeout to chain functions exeution
setTimeout(readDirectory, 500);
setTimeout(readFile, 1000);
setTimeout(deleteFile, 2000);
setTimeout(readDirectory, 2500);
