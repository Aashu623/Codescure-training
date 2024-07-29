async function fetchEmployeeData() {
    try {
        const response = await fetch('https://dummyjson.com/users')
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

fetchEmployeeData();