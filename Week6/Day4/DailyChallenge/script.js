const form = document.getElementById('myForm'); // access the form
const output = document.getElementById('output'); // access the output

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission

    const nameInput = document.getElementById('name'); // access user name
    const lastNameInput = document.getElementById('lastname'); // access user last name

    const formData = { // create an object to store user name and last name values
        name: nameInput.value,
        lastName: lastNameInput.value
    };

    const jsonData = JSON.stringify(formData, null, 2); // Pretty-print JSON with user name and last name

    output.textContent = jsonData; // assign JSON object to text content of the output element in HTML
});