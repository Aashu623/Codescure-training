// - Divide the employee age by null and handle the error. Also if the error occurs divide it by 2 and print it.
function divideByNull(employee) {
    try {
        const result = employee.age / null;
        if (isNaN(result)) {
            throw new Error('Cannot divide by null');
        }
        console.log(result)
    } catch (error) {
        console.log(err)
        console.log('Divide by 2 : ', employee.age / 2)
    }
}

const employee = {
    id: 1,
    name: 'Aashish Kushwah',
    email: 'aashukushwah53678@gmail.com',
    age: 22,
    address: 'Ganjbasoda, Madhya Pradesh',
    phone: 7000759525,
    gender: 'Male',
    married: false,
    salary: 500000
}

divideByNull(employee);

// - Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function

function printNumbers(m, n) {
    let i = m

    function printCurrent() {
        if (i <= n) {
            console.log(i)
            i++
            setTimeout(printCurrent, 100);
        }
    }

    printCurrent()
}

printNumbers(5, 10)