// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :
// title,
//     author,
//     image : a url,
//         alreadyRead : which is a boolean(true or false).
// Initiate the array with 2 books of your choice(ie.Add manually 2 books objects in the array)
const allBooks = [
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/440px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
        alreadyRead: true,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg",
        alreadyRead: false,
    },
];

// Requirements: All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div(the div must be added to the < section > created in part 1).
// For each book:
// You have to display the book’s title and the book’s author.
//     Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read.Set the color of the book’s details to red.

// 1. Get a reference to the section element
const booksSection = document.querySelector("section");

// 2. Loop through each book object
allBooks.forEach((book) => {
    // 3. Create a div element for each book
    const bookDiv = document.createElement("div");

    // 4. Create an image element for the book cover
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.width = 100; // Set image width to 100px

    // 5. Create a paragraph element to display title and author
    const bookDetails = document.createElement("p");

    // 6. Set the content of the paragraph (title and author)
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    // 7. Set red color for already read books
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    // 8. Append the image and paragraph to the book div
    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookDetails);

    // 9. Append the book div to the section element
    booksSection.appendChild(bookDiv);
});