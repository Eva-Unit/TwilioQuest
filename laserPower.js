function calculatePower(powerSettings) {

    const map1 = powerSettings.map(a => a * 2);

    let totalPower = map1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24