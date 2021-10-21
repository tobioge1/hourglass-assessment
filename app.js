// import built-in readline module 
const readline = require("readline");

// define readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// initialize variable
let arg

// ouput
rl.question("Enter odd number greater than or equals 5: ", function (input) {
  // check that argument passed in is a valid number
  if(isNaN(input)) throw new Error ('Invalid argument')
  arg = Number(input)
  // check condition   
  checkInput(arg)
  // call hourglass function and write to the console
  console.log(displayHourGlass(arg))
  // close readline interface   
  rl.close();
});


// only allow odd numbers and input greater than or equals 5
function checkInput (arg) {
    if((arg % 2) === 0 || arg < 5) throw new Error(`Invalid input: ${arg}`)
    return true
}

// define function to print hourglass
function displayHourGlass (sizeXY) {
    // array to hold X or _ 
    let display = []

    // loop through x-axis or rows
    for (let x = 1; x <= sizeXY; x++){
        // loop through y-axis or columns
        for (let y = 1; y <= sizeXY; y++) {
            // for top and bottom rows, check first postion, that current loop equal sum input
            // that row equals colum, that sum of row and column equals size of input or last item in 
            // the hourglass
            if(x === 1 || x === sizeXY || x === y || x + y === (sizeXY+1)) {
                display.push('X')
                continue
            }
            // in any cases not matching the above, display an _
            display.push('_')
        }
        // move to th next line
        display.push('\n')
    }
    // convert array of strings to just strings and return
    return display.join('')
}

