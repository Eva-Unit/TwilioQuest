const firstValue = process.argv[2];
const secondValue = process.argv[3];

// Your comparison code (if statements) go here
if (firstValue.toLowerCase() < secondValue.toLowerCase()) {
    console.log('-1')
}

if (firstValue.toLowerCase() === secondValue.toLowerCase()) {
    console.log('0')
}

if (firstValue.toLowerCase() > secondValue.toLowerCase()) {
    console.log('1')
}