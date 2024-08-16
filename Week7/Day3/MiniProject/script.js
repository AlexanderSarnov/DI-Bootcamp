// avoid unnecessary fetching requests during development
let dataFetched = false;

function fetchPerson(id) {
    if (!dataFetched) {
        // Fetch data from API
        fetch(`https://www.swapi.tech/api/people/${id}/`)
            .then(response => response.json())
            .then(data => {
                // Process data
                dataFetched = true;
            })
            .catch(error => console.error(error));
    }
}

fetchPerson(83)