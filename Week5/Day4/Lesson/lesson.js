//Forms, JSON and Exception
// Interaction from the front-end to the back-end using forms, JSON, and exception handling.

// Client - browser
// Server - Node.js (Express.js)

// When typing a URL into the browser's address bar and pressing Enter, the browser sends a GET request to the server.
// We use DNS (Domain Name System) to translate the domain name into an IP address in order to send the request to the proper server.
// The server then receives the request, processes it, and sends a response back to the browser in a format called HTTP (Hypertext Transfer Protocol).
// First the browser checks if the response has a valid MIME type (like text/html, image/jpeg, etc.) ans sends new requests to the server in order to retrieve the necessary resources (CSS, JS, images) whuile reading the HTML document line by line.
// Browser then renders the HTML content from the server (the idea of Hypertext Transfer Protocol is to send and receive data in a format that can be understood by web browsers (HTML, CSS, JS)).

// ! Note: The above explanation is a simplified version and doesn't cover all aspects of HTTP and Node.

// * For detailed information, refer to the official documentation: https://nodejs.org/en/docs/

// * Use shortpixel to compress images (https://shortpixel.com/) before uploading them to your server.

// * Key is to use JSON.stringify() to send request body to server and parse to get the response body in JSON format and convert into an object using JSON.parse().

// SSL certificate is a license that allows websites to securely communicate with clients over the internet. It's a common practice to use SSL certificate when hosting your website. Basically it is a sort of encrypted communication channel between the client (browser) and the server, where only encrypted data is transmitted and decrypted at the network level (TCP/IP).

// An SSL certificate is a digital certificate that enables secure communication between a website and its visitors.
// An SSL certificate (Secure Sockets Layer) is a digital certificate that authenticates a website’s identity and enables an encrypted connection. It is crucial for secure communication between a client (browser) and a server. When a website uses an SSL certificate, data transmitted between the client and server is encrypted, ensuring that sensitive information remains private and protected from eavesdropping or tampering. This encryption and decryption process occurs at the network level (TCP/IP), making it a standard practice for websites to use SSL certificates to enhance security and trust.

// *Commoon HTTP Methods:
// *GET:
// Requests a representation of the specified resource.Requests using GET should only retrieve data.
// *HEAD:
// Asks for a response identical to a GET request, but without the response body.
// *POST:
// Submits an entity to the specified resource, often causing a change in state or side effects on the server.
// *PUT:
// Replaces all current representations of the target resource with the request content.
// *DELETE:
// Deletes the specified resource.
// *CONNECT:
// Establishes a tunnel to the server identified by the target resource.
// *OPTIONS:
// Describes the communication options for the target resource.
// *TRACE:
// Performs a message loop-back test along the path to the target resource.
// *PATCH:
// Applies partial modifications to a resource12345.

// GET request examppel with all information in URL parameters:
// http://127.0.0.1:5500/Week5/Day4/Lesson/lesson.html?name=John&password=1111 --> GET request with query parameters in the URL name = John and password = 1111.

// ! set Autoclose HTML tags in VS code

// proper name in html tags allows forms to communicate with the server and GET or POST our requests.

// *JSON

// JSON is a lightweight data interchange format that is easy for humans to read and write.
// JSON is a standardized format that uses JavaScript object notation syntax (also known as JavaScript literals) to represent data
// JSON is typically used for transmitting data between a server (Node.js) and a client (Web Browser).

let user = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'johndoe@jmail.com',
        sum: (age, grade) => {
            return age + grade;
        },
        password: 'password123',
        undefined: undefined, // will not be included in the output of JSON requests
    },
];

// *JSON.stringify() converts a JavaScript object or value to a JSON string
const filterMyJSON = (key, value) => {
    if (key === 'password') return '*****'; // hide sensitive data in the output of JSON requests.
    if (key === 'id') return 'encryption key...' + value[0] + 'encryption key...'; // add some values to the output in order to obfuscate sensitive data.
    return value;
};

let userJson = JSON.stringify(user, filterMyJSON, 2); // parameter 2 is the indentation level for pretty-printing the JSON string.

console.log(userJson); // Outputs: [{"name":"John Doe","age":30,"email":"john...

let str = `[{"name":"John Doe","age":30,"email":"johndoe@jmail.com"}]`; // must use backticks for multiline strings when working with JSON.

// *JSON.parse() converts a JSON string back to a JavaScript object

// ! Note: JSON can't read '...' (single quotes) from the string. It needs to be a valid JSON string with valid JSON syntax: `{["..."]}` (double quotes) or `[{"..."}]` (square brackets).

const userFromJson = JSON.parse(str);
console.log(userFromJson); // Outputs: [{name: 'John Doe', age: 30, email:

// ! Note: JSON.parse() doesn't automatically parse nested JSON objects. You need to use recursion or a library like lodash to parse nested JSON objects.

// XML (eXtensible Markup Language) is a markup language that defines a set of rules for parsing. XML is widely used for data exchange, configuration files, and document storage.

// *Exceptions
// In JS we mean run-time errors.

console.log('before');
try {
    console.log(a); // Uncaught ReferenceError: a is not defined (RuntimeError, does not allow to run code before it is defined)
    // ! Note: To handle such errors, we use try-catch blocks.
} catch (error) {
    console.error('An error occurred:', error);
    //* .. in production there will be a logic to send a log file to the developer or notify the user about the error.
}

let a;

console.log(a); // ReferenceError: a is not defined

a = 5;

console.log(a); // 5

console.log('after');

// Example:

function x(num) {
    if (num === undefined) {
        throw new Error('Parameter num is undefined'); // it will stop the execution of the function and throw the error to the calling function
    }
    try {
        a;
    } catch (error) {
        //console.log(error.message); // a message property contains the error message
        // return 7; // ! it did not work!
        throw new Error('error on funciuton x line 127 on file lesson.js'); // it will stop the execution of the function and throw the error to the calling function
    } finally {
        console.log('finally block executed');
    } // this block will always be executed, no matter what happens in the try block
}

function y() {
    try {
        console.log(x(10));
    } catch (error) {
        console.log(error);
    }
}

y();

console.log('before');

console.log(x());

console.log('after');

// ! Need to go deeper into JS try-catch-finally, error handling, async/await, promises, etc. for a more detailed explanation and clearer understanding of more complex scenarios.

// ! To add a breakpoint and check the values of a JSON object in Chrome, follow these steps:
// Open Chrome DevTools:
// Right-click on the web page and select Inspect, or press Ctrl + Shift + I.
// Go to the Sources Panel:
// Click on the Sources tab in the DevTools.
// Find Your JavaScript File:
// In the left panel, navigate to the file containing the JSON object you want to inspect.
// Set a Breakpoint:
// Click on the line number where you want to set the breakpoint. A blue icon will appear, indicating the breakpoint is set.
// Reload the Page:
// Reload the web page to hit the breakpoint.
// Check JSON Values:
// When the breakpoint is hit, the execution will pause. You can now hover over the JSON object or use the Scope section in the right panel to inspect its values.
// This process will allow you to pause the execution and inspect the JSON object values in Chrome DevTools123.

// **http methods
// GET, POST, DELETE, UPDATE, POST, PATCH
// !In console: curl https://address - will return the connected url page
// !curl -i https://address - will also return the header metadata
