
async function fetchEmployeeData() {
    try {
        const response = await fetch('https://dummyjson.com/users')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

fetchEmployeeData();