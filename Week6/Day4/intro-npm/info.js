const axios = require('axios');

const getInfo = async (url) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response); // pure response from axios is a frll server response with all the details of the response status and so on.
        console.log('Users:', response.status); // data property of the response object contains only the actual data
    } catch (error) {
        console.log('Error:', error);
    }
};

getInfo();
