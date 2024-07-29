//Functions

// 1. Create a function that takes a number and prints all even numbers upto that number
function printEven(limit) {
    for (let i = 0; i < limit; i++) {
        if (i % 2 == 0)
            console.log(i)
    }
}

printEven(10); //print even numbers upto 10

// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
let employees = [
    {
        name: 'Aashish Kushwah',
        email: 'aashukushwah53678@gmail.com',
        age: 22,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Male',
        Married: false,//not married
    }
    , {
        name: 'Aman',
        email: 'aman@gmail.com',
        age: 51,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Male',
        Married: false,//not married
    }, {
        name: 'Naina',
        email: 'naina@gmail.com',
        age: 60,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Female',
        Married: false,//not married
    }, {
        name: 'Raj',
        email: 'raj@gmail.com',
        age: 42,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Male',
        Married: false,//not married
    }, {
        name: 'Aditya',
        email: 'aditya@gmail.com',
        age: 398,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Male',
        Married: false,//not married
    }, {
        name: 'Ishan',
        email: 'ishan@gmail.com',
        age: 51,
        address: 'Ganjbasoda, madhya pradesh',
        phone: 7000759525,
        gender: 'Male',
        Married: false,//not married
    }
]

function filterEmployees(employees, age) {
    return employees.filter(employee => employee.age < age) //return the epmloyees who's age is less then input age
}

let filteredEmployee = filterEmployees(employees, 50)
console.log(filteredEmployee);

// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.

