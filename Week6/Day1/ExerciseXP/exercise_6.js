// Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.

// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


function tellMyFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
    // Create a new paragraph element
    const fortuneText = document.createElement("p");

    // Build the message
    const message = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    // Combine paragraph element with text
    fortuneText.textContent += message;

    // Append the paragraph to the body
    document.body.appendChild(fortuneText);
}

tellMyFortune("King", "Camelot", "Guinevere", 4);