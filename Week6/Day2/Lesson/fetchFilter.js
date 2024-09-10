const URL = 'https://users-18kl.onrender.com/userjson';

const displayNewUsers = (event) => {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    let name = event.target.name.value;
    let email = event.target.email.value;
    let username = event.target.username.value;

    // Make a POST request to the API
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            username: username,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            fetchAllUsers(); // Fetch all users after adding the new user
        })
        .catch((error) => console.error(error));
};

const fetchAllUsers = () => {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayAllUsers(data);
        })
        .catch((error) => console.error(error));
};

const displayAllUsers = (users) => {
    const allUsersDiv = document.getElementById('allUsers');
    const filteredUsers = users.filter((user) => user.id >= 14);
    allUsersDiv.innerHTML = filteredUsers
        .map(
            (user) => `
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <hr>
    `
        )
        .join('');
};

document.getElementById('postForm').addEventListener('submit', displayNewUsers);
