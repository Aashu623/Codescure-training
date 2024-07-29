// Take two numbers and perform all the arithmetic operations over them.
let first_num = 75
let second_num = 25

let sum = first_num + second_num
let abs = first_num - second_num
let multiplication = first_num * second_num
let devision = first_num / second_num

console.log(`sum of ${first_num} and ${second_num}            = ${sum}`)
console.log(`differece of ${first_num} and ${second_num}      = ${sum}`)
console.log(`multiplication of ${first_num} and ${second_num} = ${multiplication}`)
console.log(`Devision of ${first_num} and ${second_num}       = ${devision}`)

// Take 2 numbers and 2 strings and perform addition operation on them in same sequence.

let num1 = 10, num2 = 20, str1 = 'hello', str2 = 'world'
console.log(num1 + num2)
console.log(num1 + num2 + str1)
console.log(num1 + num2 + str1 + str2)

// Take 2 Strings and 2 numbers and perform addition operation on them in same sequence.
str1 = 'hello', str2 = 'world', num1 = 10, num2 = 20
console.log(str1 + str2)
console.log(str1 + str2 + num1)
console.log(str1 + str2 + num1 + num2)

// Write an operation to get its result as NaN.
console.log(str1 / num1)

// Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation
let bool1 = true, bool2 = false

console.log(`The AND operation will be result as ${bool1 && bool2}`)
console.log(`The OR operation will be result as ${bool1 || bool2}`)

// Take 2 variables and compare them using == and === such that result of both the comparisons operation is not equal.

let var1 = 10;
let var2 = '10';
console.log(`Comparing with == will be result as ${var1 == var2}`)
console.log(`Comparing with === will be result as ${var1 === var2}`)