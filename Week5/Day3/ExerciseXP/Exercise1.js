// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    // create an object with nested object and nested array.
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207],
    },
};

const {
    name,
    location: {
        country,
        city,
        coordinates: [lat, lng],
    },
} = person; // destructuring the object to access all the nested properties.
// !Might lead to an issue with duplicated variable names on a global scope!

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`); // Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
