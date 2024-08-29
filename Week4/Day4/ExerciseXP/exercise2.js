const userForm = document.querySelector("form");

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");

const firstNameAttributeInput = document.querySelector('input[name="firstname"]');
const lastNameAttributeInput = document.querySelector('input[name="lastname"]');

// Retrieve the form and console.log it.
console.log(userForm);

// Retrieve the inputs by their id and console.log them. - see in the end of the function below
// Retrieve the inputs by their name attribute and console.log them. - see in the end of the function below
// When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the < ul class="usersAnswer" ></ >, below the form.
// Form submit event listener

userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission to exclude an empty form 

    // Get input values
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    const firstNameValue2 = firstNameAttributeInput.value.trim();
    const lastNameValue2 = lastNameAttributeInput.value.trim();

    // Check if values are empty
    if (!firstNameValue || !lastNameValue) {
        alert("Please enter both first and last name!");
        return; // Exit the function if empty
    }

    // Create list items
    const firstNameLI = document.createElement("li");
    firstNameLI.textContent = `First Name: ${firstNameValue}`;
    const lastNameLI = document.createElement("li");
    lastNameLI.textContent = `Last Name: ${lastNameValue}`;

    // Append list items to the answer list
    const answerList = document.querySelector(".usersAnswer");
    answerList.appendChild(firstNameLI);
    answerList.appendChild(lastNameLI);

    // Retrieve the inputs by their id and console.log them.
    console.log(`First Name: ${firstNameValue}, Last Name: ${lastNameValue}`);

    // Retrieve the inputs by their name attribute and console.log them.
    console.log(`First Name: ${firstNameValue2}, Last Name: ${lastNameValue2}`);
});

