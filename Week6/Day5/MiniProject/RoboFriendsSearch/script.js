// Array of robot objects with properties like id, name, username, email, and image URL
const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

// Function to display robots on the webpage
function displayRobots(robots) {
    const container = document.getElementById("container"); // Get container element

    // Clear the container before adding new robots (prevents duplicates)
    container.innerHTML = "";

    for (const robot of robots) {
        const robotCard = `
      <div class="mb-5 mt-3 card bg-info p-2 text-dark width-20 my-div">
    
        <img class="img-fluid m-auto ratio ratio-1x1 rounded-circle robot-image-wrapper" src="${robot.image}" alt="robot image">
        
        <p class="h3">${robot.name}</p>
        <p class="h6">${robot.email}</p>
      </div>
    `;

        // Create a new DOM element for each robot
        const div = document.createElement("div");
        div.innerHTML = robotCard; // Add robot details as inner HTML

        container.appendChild(div); // Add the robot card to the container
    }
}

// Function to filter robots based on search input (case-insensitive)
function updateRobotList(event) {
    const searchTerm = event.target.value.toLowerCase(); // Get search term in lowercase
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm));

    eraseContainer(); // Clear the container before displaying filtered results
    displayRobots(filteredRobots);
}

// Function to clear the container element
function eraseContainer() {
    const container = document.getElementById("container");
    container.innerHTML = "";
}

// Call displayRobots function initially to display all robots
displayRobots(robots);

// Add event listener to the search box for live filtering
document.getElementById("search-box").addEventListener("keyup", updateRobotList);