const userId = 4;
const URL = `https://jsonplaceholder.typicode.com/users?id=${userId}`;

const fetchOneUser = (event) => {
    event.preventDefault();
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('userId').textContent = data[0].id;
            document.getElementById('name').textContent = data[0].name;
            document.getElementById('username').textContent = data[0].username;
            document.getElementById('email').textContent = data[0].email;
            document.getElementById('address').textContent = `${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}`;
            document.getElementById('phone').textContent = data[0].phone;
            document.getElementById('website').textContent = data[0].website;
            document.getElementById('company').textContent = `${data[0].company.name}, ${data[0].company.catchPhrase}, ${data[0].company.bs}`;
        })
}

// get valuie from the input: get inputs by the name from the form
// event.target.name gives the name of the input field, but in the HTML document we need to add the onclick (or onsubmit) event listener to the form to trigger this function
// event.target.value gives the value of the input field
// event.target.userId.value