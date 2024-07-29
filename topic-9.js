const fs = require('fs');

let employees = [
    {
        id: 1,
        name: 'Aashish Kushwah',
        email: 'aashukushwah53678@gmail.com',
        age: 22,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Male',
        married: false,
        salary: 500000
    },
    {
        id: 2,
        name: 'Aman',
        email: 'aman@gmail.com',
        age: 51,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Male',
        married: false,
        salary: 600000
    },
    {
        id: 3,
        name: 'Naina',
        email: 'naina@gmail.com',
        age: 60,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Female',
        married: false,
        salary: 700000
    },
    {
        id: 4,
        name: 'Raj',
        email: 'raj@gmail.com',
        age: 42,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Male',
        married: false,
        salary: 800000
    },
    {
        id: 5,
        name: 'Aditya',
        email: 'aditya@gmail.com',
        age: 38,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Male',
        married: false,
        salary: 900000
    },
    {
        id: 6,
        name: 'Ishan',
        email: 'ishan@gmail.com',
        age: 51,
        address: 'Ganjbasoda, Madhya Pradesh',
        phone: 7000759525,
        gender: 'Male',
        married: false,
        salary: 750000
    }
];

fs.writeFile('data.json', JSON.stringify(employees, null, 2), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data added');
});


function filterEmployees(employees) {
    return employees.filter(employee => employee.name.includes('am'));
}

function formatSalaries(employees) {
    return employees.map(employee => {
        return { ...employee, formattedSalary: `${(employee.salary / 100000).toFixed(1)} Lac` };
    });
}

fs.readFile('data.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const employees = JSON.parse(data);

    // Filter employees with "am" in their name
    const employeesWithAmInName = filterEmployees(employees);

    fs.writeFile('filteredData.json', JSON.stringify(employeesWithAmInName), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Filtered data added');
    });

    // Writing data formatted salary
    const formattedSalaries = formatSalaries(employees);
    fs.writeFile('formattedSalaries.json', JSON.stringify(formattedSalaries), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Formatted salary data added');
    });
});