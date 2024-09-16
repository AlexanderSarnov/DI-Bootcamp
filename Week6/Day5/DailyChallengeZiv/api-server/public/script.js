// !Note: although the best practice is to use one getData function with parameters for different requests!

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
    }
};

const render = (arr) => {
    const html = arr.map((item) => {
        return `<div style="
        display:inline-block;
        margin:20px;
        padding:20px;
        border:1px solid #000;
        ">
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        </div>`;
    });
    document.getElementById('root').innerHTML = html.join('');
};

const main = () => {
    getData('http://localhost:3001/products').then((products) => {
        console.log(products);
        render(products);

        // Add event listener for search (can use same solution as for post or get, this is just an example of how to add event listener)
        document.getElementById('searchButton').addEventListener('click', () => {
            const searchId = Number(document.getElementById('searchInput').value); // Convert to number
            const product = products.find((item) => item.id === searchId);
            if (product) {
                render([product]);
            } else {
                document.getElementById('root').innerHTML = '<p>Product not found</p>';
            }
        });
    });
};

const addProductId = (event) => {
    event.preventDefault();
    const name = document.getElementById('addInputName').value;
    const price = document.getElementById('addInputPrice').value;
    const newProduct = { name, price };

    postData('http://localhost:3001/products', newProduct).then((products) => {
        console.log('Product added:', products);
        render(products);
    });
};

// Call main to start the process
main();

// !Note: Refactored functions to improve readability and maintainability. Utilizes the best practice of reusability.
// const fetchData = async (url, options = {}) => {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// const main = () => {
//     fetchData('http://localhost:3001/products').then((products) => {
//         console.log(products);
//         render(products);

//         document.getElementById('searchButton').addEventListener('click', () => {
//             const searchId = Number(document.getElementById('searchInput').value);
//             const product = products.find((item) => item.id === searchId);
//             if (product) {
//                 render([product]);
//             } else {
//                 document.getElementById('root').innerHTML = '<p>Product not found</p>';
//             }
//         });
//     });
// };

// const addProductId = (event) => {
//     event.preventDefault();
//     const name = document.getElementById('addInputName').value;
//     const price = document.getElementById('addInputPrice').value;
//     const newProduct = { id: Date.now(), name, price };

//     fetchData('http://localhost:3001/products', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newProduct),
//     }).then((products) => {
//         console.log('Product added:', products);
//         render(products);
//     });
// };

// // Call main to start the process
// main();
