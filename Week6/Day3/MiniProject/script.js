// avoid unnecessary fetching requests during development
// let dataFetched = false;

const webAddress = 'https://www.swapi.tech/api/people/';

async function retrieveUserData(id) {
    try {
        const response = await fetch(`${webAddress}${id}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        await handleResponse(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleResponse(response) {
    const { name, height, gender, birth_year, homeworld } = response.result.properties;

    try {
        const homeworldResponse = await fetch(homeworld);
        if (!homeworldResponse.ok) {
            throw new Error(`HTTP error! status: ${homeworldResponse.status}`);
        }
        const homeworldData = await homeworldResponse.json();
        const homeworldName = homeworldData.result.properties.name;

        // Update the HTML elements only after all data is retrieved
        document.getElementById('name').textContent = `Name: ${name}`;
        document.getElementById('height').textContent = `Height: ${height}`;
        document.getElementById('gender').textContent = `Gender: ${gender}`;
        document.getElementById('birth_year').textContent = `Birth Year: ${birth_year}`;
        document.getElementById('homeworld').textContent = `Homeworld: ${homeworldName}`;
    } catch (error) {
        console.error('Error fetching homeworld:', error);
    }
}

document.getElementById('button')?.addEventListener('click', () => {
    const MAX_ID = 83;
    const randomId = Math.floor(Math.random() * MAX_ID) + 1;
    retrieveUserData(randomId);
});

// retrieveUserData(83); // logs 83rd person data.
