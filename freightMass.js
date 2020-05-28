function calculateMass(freightItems) {
    let convertToString = freightItems.join('')
    let calculateStringLength = [convertToString.length]
    let totalMass = calculateStringLength.reduce((sum, current) => sum + current, 0);

    /*
    Replace this comment with your code.
    Use the array reduce() function to replace the value of totalMass.
    Note that it is possible to use forEach or other loop types to do this, but
    using "reduce" is probably the most elegant solution!
    */

    return totalMass;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12