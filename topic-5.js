// Take 2 numbers and print the smallest one amongst them
let num1 = 10, num2 = 20
if (num1 < num2) {
    console.log(`${num1} is smallest among ${num1} and ${num2}`)
}
else {
    console.log(`${num2} is smallest among ${num1} and ${num2}`)
}

// Take 3 numbers and print the biggest one amongst them
let first_number = 20, second_number = 30, third_number = 50

if (first_number > second_number && first_number > third_number) {
    console.log(`${first_number} is biggest among ${first_number}, ${second_number} and ${third_number}`)
} else if (second_number > third_number) {
    console.log(`${second_number} is biggest among ${first_number}, ${second_number} and ${third_number}`)
}
else {
    console.log(`${third_number} is biggest among ${first_number}, ${second_number} and ${third_number}`)
}

// Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
// Anything below 50 is F

let numbers = 80

switch (true) {
    case (numbers >= 90):
        console.log("Grade A")
        break;
    case (numbers >= 80):
        console.log("Grade B")
        break;
    case (numbers >= 70):
        console.log("Grade C")
        break;
    case (numbers >= 60):
        console.log("Grade D")
        break;
    case (numbers >= 50):
        console.log("Grade E")
        break;

    default:
        console.log("Grade F")
        break;
}
