/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName ='Anonymous', lastName ='Person', age, married = false){
  return{
    firstName :firstName,
    lastName: lastName,
    age: age,
    married : married,
    goingOn :function(){
return this.age +1
    },
    ageUp :function(){
      return this.age ++
    }
  }
}

// goingOn = function(){
// return .age + 1
// } 
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
