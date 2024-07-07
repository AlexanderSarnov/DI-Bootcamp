// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function welcomeUser(name) {
    const navbar = document.getElementById("navbar");
    const welcomeSection = document.createElement("div");
    welcomeSection.classList.add("welcome-section");

    const profilePicture = document.createElement("img");
    profilePicture.classList.add("profile-picture");
    profilePicture.src = "default-user.png";

    const welcomeText = document.createElement("span");
    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = `Welcome, ${name}!`;

    welcomeSection.appendChild(profilePicture);
    welcomeSection.appendChild(welcomeText);
    navbar.appendChild(welcomeSection);
})("John");