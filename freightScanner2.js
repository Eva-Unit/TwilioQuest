function scan(freightItems) {
    let items = freightItems
    let contrabandIndexes = [];
    items.forEach(function (item, index) {
        if (item === 'contraband') {
            contrabandIndexes.push(index)
        }
    });

    /*
    Replace this comment with your code.
  
    Your code needs to:
    - Loop through every item in the freightItems array
    - if the item is equal to "contraband", add the current index of the item 
      to contrabandIndexes - hint: use the array "push()" method
  
    */

    return contrabandIndexes;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]