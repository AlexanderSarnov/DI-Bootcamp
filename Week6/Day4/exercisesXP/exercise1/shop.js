const products = require('./products.js');

function searchProductByName(name) {
  // Corrected the typo here
  const product = products.find(product => product.productName === name);

  if (!product) {
    return `Product with name "${name}" is not in the shop.`;
  } else {
    return product;
  }
}

// Example usage
const result = searchProductByName('Skull');
console.log(result); // Output: { productName: 'Skull', productPrice: 30, productCategory: 'Bones' }

const result2 = searchProductByName('Heart');
console.log(result2); // Output: { productName: 'Heart', productPrice: 900, productCategory: 'Organs' }
