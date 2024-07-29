// filtering words longer than 4 letters
const arr = ['aashish', 'aman', 'raj', 'aadi', 'ishan', 'ayush']

const filteredArr = arr.filter((ele) => ele.length > 4)
console.log(filteredArr);


// find the maximum number in the array using reduce
const newArr = [12, 43, 54, 126, 34, 69]
const maxi = newArr.reduce((a, b) => Math.max(a, b), -Infinity)

console.log(`The Maximum number will be ${maxi}`)



// fetchData()
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories')
        const json = response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

fetchData();


const input = "George Raymond Richard Martin"

const strArr = input.split(' ');
const result = strArr.map((ele) => ele[0])

console.log(result.join(''))
