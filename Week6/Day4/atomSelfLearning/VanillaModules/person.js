const personName = 'Mike Taylor'
const personCar = 'Ford Mustang'

module.exports = { personName, personCar };
// when in key : value pair we define value s.t. key === value
// we can use shortcut and write only key.
// Thus object above is exact the same as:
/**
{
  personName: personName,
  personCar: personCar
};
*/

// console.log(typeof { personName, personCar }); // object
