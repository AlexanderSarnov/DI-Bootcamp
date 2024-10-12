// Exercise 7: Type Assertions
// Instructions
// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// Access the Element’s Properties:
// Once cast, use the properties of the specific element type, like setting the value of an input element.
// Test the Functionality:
// Ensure that you can successfully set or manipulate a property of the element.
// Additional Notes:
// Type assertions are a powerful way to let TypeScript know more about the type of an element when you’re certain of it. However, you should use them cautiously, as incorrect assertions can lead to runtime errors if the type is not as expected.
var myInput = document.getElementById('myInput');
var value = myInput.value;
myInput.value = 'New Value';
console.log(value); // Output: 'default', but on the page we will see 'New Value' in the input field instead.
