/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName ='Anonymous'){
  return{
    firstName :firstName,

  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
