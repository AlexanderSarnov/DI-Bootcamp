// Initialize Variables
const form = document.getElementById('myForm'); // access the form
const output = document.getElementById('output'); // access the output

// Initialize event listener for form submission with preventDefault() to prevent form submission and a funcionality to collect submitted data in a JSON object and populate it in the output element
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default submission - sending data to the server and refreshing the page.

    // Initialize form inputs
    const nameInput = document.getElementById('name'); // access user name input
    const lastNameInput = document.getElementById('lastname'); // access user last name input

    // Initialize form data object to store user name and last name values
    const formData = {
        name: nameInput.value,
        lastName: lastNameInput.value,
    };

    const jsonData = JSON.stringify(formData, undefined, 2); // create a JSON object from the form data object with pretty printing.

    output.textContent = jsonData; // assign JSON object to the output element.
});
