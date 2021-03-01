// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var fibonacciInputOne = 6
var fibonacciInputTwo = 10

describe("when 'fibonacciArray' is called", () => {
  let fibonacciOutputOne = [1, 1, 2, 3, 5, 8]
  let fibonacciOutputTwo = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("returns an array with the amount of numbers requested in the Fibonacci sequence", () => {
    expect(fibonacciArray(fibonacciInputOne)).toEqual(fibonacciOutputOne)
    expect(fibonacciArray(fibonacciInputTwo)).toEqual(fibonacciOutputTwo)
  })
})

// b) Create the function that makes the test pass.
//make a function that takes a single number as an arguement (greater than 2) to determine length of array
//create new array
//map will then return value + value to each iteration

// const fibonacciArray = (i) => {
//   let newFibArray = []
//   return newFibArray.forEach((item, i) => {
//     (item + item++)
//   });
//   return newFibArray
// }

//^could not use map or foreach -- while I am sure there is a way....could not get it to work.  Decided to go for a for loop instead
//used the for loop to push into array.  Since we will have an input greater than 2, the array will start with the first two digits
//for loop will start on index 2 -- run for the length of user input number - and iterate until complete
//iteration will push an equation that takes the 2 previous index and adds them together to become the sum on current index

const fibonacciArray = (length) => {
  let newFibArray = [1,1]
  for(let i = 2; i < length; i++){
    newFibArray.push(newFibArray[i - 2] + newFibArray[i - 1])
  }
  return newFibArray
}
console.log(fibonacciArray(fibonacciInputOne));
console.log(fibonacciArray(fibonacciInputTwo));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("when 'onlyOdd' is called", () => {
  let onlyOddOutput1 = [-9, 7, 9, 199]
  let onlyOddOutput2 = [-823, 7, 23]
  it("returns only odd numbers in array from least to greatest", () => {
    expect(onlyOdd(fullArr1)).toEqual(onlyOddOutput1)
    expect(onlyOdd(fullArr2)).toEqual(onlyOddOutput2)

  })
})

// b) Create the function that makes the test pass.
//create a function that takes an array of many data types
//filter through array to look for typeof to determine only numbers && check numbers to see if they are odd by using %2
//sort numbers using sort method

const onlyOdd = (array) => {
  let numSearch = array.filter(function(value){
    return (typeof value === "number") && (value % 2 !== 0)
      })
      function sortArray(a, b) {
        return a - b
  }
  return numSearch.sort(sortArray)
}
console.log(onlyOdd(fullArr1));
console.log(onlyOdd(fullArr2));


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”
var middleLetters3 = "code"
//Expected output: "od"

describe("when 'middleLetterChecker' is called", () => {
  let middleLetter1Result = "p"
  let middleLetter2Result = "oc"
  let middleLetter3Result = "od"
  it("returns only the middle letters of the string provided", () => {
    expect(middleLetterChecker(middleLetters1)).toEqual(middleLetter1Result)
    expect(middleLetterChecker(middleLetters2)).toEqual(middleLetter2Result)
    expect(middleLetterChecker(middleLetters3)).toEqual(middleLetter3Result)
  })
})


// b) Create the function that makes the test pass.
//write a function that takes a string of single words as an arguement
//for each - check length of string.  divide number by 2 to find what index is middle
//round number to ceiling and return letter from that index
//if even -- return index + 1

const middleLetterChecker = (string) => {
  let stringLength = string.length
  if(stringLength % 2 !== 0){
    return string.charAt(stringLength / 2)
  }else{
    return string.charAt((stringLength / 2) - 1) + string.charAt(stringLength / 2)
  }
}
console.log(middleLetterChecker(middleLetters1));
console.log(middleLetterChecker(middleLetters2));
console.log(middleLetterChecker(middleLetters3));


// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("when 'arraySum' is called", () => {
  let addedNumbers1 = [2, 6, 51, 60]
  let addedNumbers2 = [0, 7, -1, 11]
  let addedNumbers3 = []
  it("returns the numbers added", () => {
    expect(arraySum(numbersToAdd1)).toEqual(addedNumbers1)
    expect(arraySum(numbersToAdd2)).toEqual(addedNumbers2)
    expect(arraySum(numbersToAdd3)).toEqual(addedNumbers3)
  })
})

// b) Create the function that makes the test pass.
//write a function that takes an array of numbers as an arguement
//iterate through array to add current number of index to the previous using map -- had to change this.  Could not get this to work with map so used push instead
//if no numbers are in array - return empty array. -- ran into alot of undefined errors with this one until I realized I needed check if the array had 0 index then to just simply return the array.

//Had to refactor this a few different ways to finally come to this result.  I know there is a way to condense this down however I don't quite understand methods like reduce just yet.

const arraySum = (array) => {
  if(array.length === 0){
    return array
  }else{
    //the two variables are set - one to track the new number for the array - the other is to keep track of the previous to be called on later.
    let newArraySum = [array[0]]
    let lastIndex = array[0]
    for(let i = 1; i < array.length; i++){
      //this is making it so the last index now becomes the sum of current index plus the last index
      lastIndex = lastIndex + array[i];
      newArraySum.push(lastIndex)
    }
    return newArraySum;
  }
}


console.log(arraySum(numbersToAdd1));
console.log(arraySum(numbersToAdd2));
console.log(arraySum(numbersToAdd3));
