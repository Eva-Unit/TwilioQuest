function mutate(freightItems) {
    // This is an array variable you can override with your mutated array
    let mutatedItems = freightItems.map(item => item.toUpperCase());

    /*
    Replace this comment with your code.
    Use the array map() function to replace mutatedItems with a new array of
    strings from the input array that have been converted to ALL CAPS
    */

    return mutatedItems;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']