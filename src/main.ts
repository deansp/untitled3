
/*
Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
 */

const numbers: number[] = [1,2,3,41]
const doubleNumbers: number[] = numbers.map((number: number) => number*2)
console.log(numbers)
console.log(doubleNumbers)

const names: string[] = ["dean","barbara","tom"]
const filterNames: string[] = names.filter((name: string):boolean => name.length > 5)
console.log(names)
console.log(filterNames)

const sum: number = numbers.reduce((accumulator: number,currentValue) =>  accumulator + currentValue, 0)
console.log(sum)

const isBigger10 = numbers.some(number => number >10);
console.log(isBigger10)

