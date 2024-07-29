// - Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
const employee = [
    {
        "id": 1,
        "name": "Aashish Kushwah",
        "email": "aashukushwah53678@gmail.com",
        "age": 22,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Male",
        "married": false,
        "salary": 500000
    },
    {
        "id": 2,
        "name": "Aman",
        "email": "aman@gmail.com",
        "age": 51,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Male",
        "married": false,
        "salary": 600000
    },
    {
        "id": 3,
        "name": "Naina",
        "email": "naina@gmail.com",
        "age": 60,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Female",
        "married": false,
        "salary": 700000
    },
    {
        "id": 4,
        "name": "Raj",
        "email": "raj@gmail.com",
        "age": 42,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Male",
        "married": false,
        "salary": 800000
    },
    {
        "id": 5,
        "name": "Aditya",
        "email": "aditya@gmail.com",
        "age": 38,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Male",
        "married": false,
        "salary": 900000
    },
    {
        "id": 6,
        "name": "Ishan",
        "email": "ishan@gmail.com",
        "age": 51,
        "address": "Ganjbasoda, Madhya Pradesh",
        "phone": 7000759525,
        "gender": "Male",
        "married": false,
        "salary": 750000
    }
]

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(employee)
    }, 2000)
})

promise1.then((value) => {
    console.log(value)
})


// - Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(employee)
    }, 2000)
}).then((result) => {
    console.log(result)
    result.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        else {
            return 1;
        }
    })
    console.log(result)
})


