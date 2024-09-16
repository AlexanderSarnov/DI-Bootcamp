import { addNumbers, multiplyNumbers } from './math.js';
import _ from 'lodash';

const num1 = 10;
const num2 = 5;

console.log(`Addition of ${num1} and ${num2}:`, addNumbers(num1, num2));
console.log(`Multiplication of ${num1} and ${num2}:`, multiplyNumbers(num1, num2));

// Using Lodash utility functions
const array = [1, 2, 3, 4, 5];
console.log('Sum of array elements:', _.sum(array));
console.log('Product of array elements:', _.reduce(array, (product, n) => product * n, 1));
