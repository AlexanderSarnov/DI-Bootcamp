// !Part1
// string = 'A-quick-brown-fox'; // string to be split with a separator

// array_of_strings = string.split('-'); // the split() function with an argument based on the separator in the original string

// console.log(string); // *split method does not affect the original array
// console.log(array_of_strings);

// !Part2
string = 'A quick brown fox';

array_of_strings = string.split(' ');
array_of_strings2 = string.split('');
array_of_strings3 = string.split(); // just the same as the original array
array_of_strings4 = string.split(2); // no difference from str3


console.log(array_of_strings, array_of_strings2, array_of_strings3, array_of_strings4);
