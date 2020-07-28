/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName ='Anonymous', lastName ='Person', age){
  return{
    firstName :firstName,
    lastName: lastName,
    age: age,

  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
