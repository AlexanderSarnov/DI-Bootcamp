async function averageAge() {
  const { personData } = await import('./data.js');

  let sumAges = 0;
  let count = 0;

  for (let person of personData) {
    if(typeof person.personAge === 'number') {
      sumAges += person.personAge;
      count++;
    }
  }

  const average = count > 0 ? sumAges / count : 0;
  return average;
}

// Usage example:
averageAge().then(avg => console.log(`Average age: ${avg}`));
