// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function myName(){
  let name = 'Dimeji';
  function sayHello(){
    return `${name} says Hello!!`;
  }
  return sayHello;
}

console.log(myName()());

// STRETCH IIFE - Immediately Invoked Function Expression 
// test

function yourName(){
  let name = 'Josemaria';
  return (function(){
    return `${name} says Hello!!`;
  })()
}

console.log(yourName());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  function counter(){
    count++
    return count;
  }
  return counter
};

// test for challenge 2
// const myCounter = counterMaker();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMakerMod = () => {
  let count = 0;
  let limit = 3;
  function counter(){
    count++
    if(count <= limit){
      return count;
    } else {
      count = 1;
      return count;
    }
  }
  return counter
};

// Test for challenge 3
// const myCounter = counterMakerMod();
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function(){
      count--;
      return count;
    }
  };
};

// Test for challenge 4
// let newCounter = counterFactory()
// console.log(newCounter.increment())
// console.log(newCounter.increment())
// console.log(newCounter.increment())
// console.log(newCounter.decrement())
// console.log(newCounter.decrement())
// console.log(newCounter.increment())