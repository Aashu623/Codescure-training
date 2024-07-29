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


employees.forEach((employee) => {
    if (employee.age >= 50)
        console.log(employee)
})