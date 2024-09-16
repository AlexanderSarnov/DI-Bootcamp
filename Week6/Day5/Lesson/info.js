export async function getUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.log('Error:', error);
    }
}

// // Call the function
// getUsers();

// export default getUsers; // Export the function for other modules to use.
