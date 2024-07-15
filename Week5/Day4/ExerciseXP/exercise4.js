const pi = Math.PI
const userForm = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeOutput = document.getElementById("volume");

userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission to exclude an empty form

    // Data Validation
    // Get input values
    const radiusInputValue = radiusInput.value.trim();

    // Regular expression for float or integer
    const numberRegex = /^\d+(?:\.\d*)?$/;

    if (!numberRegex.test(radiusInputValue)) {
        alert("Please enter a valid number (integer or float).");
        numberInput.value = ""; // Clear the input after error
        return;
    } else { numberRadius = parseFloat(radiusInputValue) }

    // Volume Calculation
    const volume = (4 / 3) * pi * Math.pow(numberRadius, 3);

    volumeOutput.value = volume.toFixed(2); // Format to 2 decimal places
});