/** Fetch and Async/Await */
// Fethc is:
// fetch is a built-in JavaScript function that sends an HTTP request to a specified resource.
// ((an API endpoint) (Option - an object containing request options))

// fetch('URL', function (req, res))

// const URL = 'https://jsonplaceholder.typicode.com/users';
const userId = 4; // The ID of the user you want to fetch
const URL = `https://jsonplaceholder.typicode.com/users?id=${userId}`; // Replace with your actual URL

// let response = fetch(URL); // This is a promise that resolves to a Response object

// fetch(URL) // This is a promise that resolves to a Response object
// .then((res) => console.log(res)); // This is a promise that resolves to the JSON body of a Response;

// response.json() // This is a promise that resolves to the JSON body of a Response
// response.text() // This is a promise that resolves to the text content of a Response
// response.blob() // This is a promise that resolves to a Blob object representing the response
// response.formData() // This is a promise that resolves to a FormData object representing the response
// response.arrayBuffer() // This is a promise that resolves to an ArrayBuffer object representing the response
// response
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .then((res) => res.formData())
//     .catch((err) => console.log(err));
// The default fetch method is a GET request. To make a POST request, you can use the method option: fetch('URL', { method: 'POST' })

// methods: 'GET', 'POST', 'PUT', 'DELETE', 'PATCH', etc.

let userInfo = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password',
};

let options = {
    method: 'GET', // This is the HTTP method to use for the request
    headers: {
        // This is a Headers object containing the request headers
        'Content-Type': 'application/json',
    },
    //body: JSON.stringify(userInfo), // This is the body of the request (a JSON object)
    // mode: 'no-cors', // This allows the request to be made cross-origin
    // cache: 'no-cache', // This prevents the browser from caching the response
    // credentials: 'same-origin', // This sends cookies with the request
    // redirect: 'follow', // This follows redirects
    // referrerPolicy: 'no-referrer', // This prevents the browser from sending the referrer header
    // integrity: 'bramble', // This adds a cryptographic hash to the response to verify its integrity
};

function fetchUsers() {
    fetch(URL, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUserInfo(data[0]);
        })
        .catch((err) => console.log(err));
}

function displayUserInfo(data) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Username: ${data.username}</p>
        <p>Email: ${data.email}</p>
    `;
}

document.getElementById('fetchButton').addEventListener('click', fetchUsers);
