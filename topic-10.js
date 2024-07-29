// Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.
class Employee {
    constructor(name, age, email, salary, phone, gender) {
        this.name = name
        this.age = age
        this.email = email
        this.salary = salary
        this.phone = phone,
            this.gender = gender
    }

    // sort by name
    static sortByName(employees) {
        return employees.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            else {
                return 1
            }
        })
    }

    // sort by age
    static sortByAge(employees) {
        return employees.sort((a, b) => a.age - b.age)
    }

    // sort by email
    static sortByEmail(employees) {
        return employees.sort((a, b) => {
            if (a.email < b.email) {
                return -1
            }
            else {
                return 1
            }
        })
    }

    // sort by salary
    static sortBySalary(employees) {
        return employees.sort((a, b) => a.salary - b.salary)
    }

    // filter by age
    static filterByAge(employees, age) {
        return employees.filter((employee) => employee.age > age)
    }

}


//create few employees and use the functions in class on them

const employees = [
    new Employee('aman', 22, 'aman@gmail.com', 300000, 1234567890, 'male'),
    new Employee('aashish', 22, 'aashish@gmail.com', 100000, 1234567890, 'male'),
    new Employee('raj', 24, 'raj@gmail.com', 200000, 1234567890, 'male'),
    new Employee('kavya', 26, 'kavya@gmail.com', 600000, 1234567890, 'male'),
    new Employee('nitin', 28, 'nitin@gmail.com', 520000, 1234567890, 'male'),
]
//sort by name
const employeesSortByName = Employee.sortByName(employees)
console.log('sorted by name', employeesSortByName)

//sort by are
const employeesSortByAge = Employee.sortByAge(employees)
console.log('sorted by age', employeesSortByAge)

//sort by email
const employeesSortByEmail = Employee.sortByEmail(employees)
console.log('sorted by email', employeesSortByEmail)

//sort by salary
const employeesSortBySalary = Employee.sortBySalary(employees)
console.log('sorted by salary', employeesSortBySalary)

//filtered by age
const employeesFilteredByAge = Employee.filterByAge(employees, 25)
console.log('filtered by age', employeesFilteredByAge)