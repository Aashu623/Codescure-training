// 1. Find sum of first 10 natural numbers
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of first natural numbers is ${sum}`)

// 2. Print fibbonaci series upto first 10 numbers.

let first_num = 0, second_num = 1
console.log(first_num)
console.log(second_num)
let i = 2
while (i < 10) {
    let next_num = first_num + second_num
    first_num = second_num
    second_num = next_num
    console.log(next_num)
    i++;
}


// 3. Print all the keys and values of employee object used in first problem
let employeeDetails = {
    name: 'Aashish Kushwah',
    email: 'aashukushwah53678@gmail.com',
    age: 22,
    address: 'Ganjbasoda, madhya pradesh',
    phone: 7000759525,
    gender: 'Male',
    Married: false,//not married
}

for (let i in employeeDetails) {
    console.log(`${i} is ${employeeDetails[i]}`);
}