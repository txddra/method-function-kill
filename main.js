/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName ='Anonymous', lastName ='Person'){
  return{
    firstName :firstName,
    lastName: lastName,

  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
