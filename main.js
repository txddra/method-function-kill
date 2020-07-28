/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName ='Anonymous', lastName ='Person', age, married = false){
  return{
    firstName :firstName,
    lastName: lastName,
    age: age,
    married : married

  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
