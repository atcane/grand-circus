// Pretend that console.log only takes in one argument

// Create a function that taking any amount of arguments,
// call console.log with each of those arguments?

// console.log(thing1, thing2, thing3);

function consoleAll(num1, num2) { // take in any amount of arguments
    return console.reduce((prev, next) => prev + next);
}

consoleAll(1,2);
conosleAll(1,2,3,4,5);

//Rest Array Example - console.log(thing1, thing2, thing3);

function consoleAll(...args) {
    // take in any amount of arguments
    let response = '';
    for(arg of args) {
        response += `${arg} `;
    }
    console.log(response);
  }
  
  const thing1 = 1;
  const thing2 = 2;
  const thing3 = 3;
  
  consoleAll(1, 2, 3);
  console.log(1,2,3);
  