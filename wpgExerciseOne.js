

// I want you to edit this code such that the value of result is the average of the numerical values of a, b, c and d, rounded up to the nearest whole number. Note the variables are currently strings, but I want the average of the numerical values.

// Do this without editing the values that a, b, c and d are assigned.

// Next I want you to assign the value of a random die roll to randomDieRoll. A die of course has six sides, so the result should be created by generating a random number between 1 and 6, inclusive.


const a = '10';
const b = '5';
const c = '20';
const d = '30';

let result = Math.ceil(((Number(a) + Number(b) + Number(c) + Number(d)) / 4));

let randomDieRollOutcome = Math.ceil(Math.random() * 6);

// console.log(result);
console.log(randomDieRollOutcome)