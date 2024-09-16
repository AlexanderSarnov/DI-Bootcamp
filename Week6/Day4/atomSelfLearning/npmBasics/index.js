import slugify from 'slugify';

const title = "Hello, World! This is a test.";
const slug = slugify(title, {
  lower: true, // convert to lowercase
  strict: true // Remove special characters
});

console.log(slug);
