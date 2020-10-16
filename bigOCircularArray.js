
// Write a “circular arr” with only a single loop (for, or while).
// I.e. Create a function that takes 2 parameters: an arr, and an integer

// The integer is the number of times the arr will be printed.

// You must use the mod operator
// Circular arr
// Just console.log the output on each loop iteration


const greets = ["hi", "hello", "hey"];

function circularArray(arr, numLoops) {
  const len = arr.length;
  let i = 0;

  // "i" can grow to infinity,
  // but "index" will always be bounded by the array length
  while (i < len * numLoops) {
    const index = i % len;
    console.log(arr[index]);
    i++;
    
    if (index === len - 1) console.log("---------");
  }
}

circularArray(greets, 3);