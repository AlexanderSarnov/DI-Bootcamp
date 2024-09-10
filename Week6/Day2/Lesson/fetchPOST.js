const URL = `https://jsonplaceholder.typicode.com/posts`;
const addPost = (event) => {
    event.preventDefault();
    let userId = event.target.userId.value;
    let title = event.target.title.value;
    let body = event.target.body.value;
    console.log(userId, title, body); // debugging purposes
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, title, body }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
};
