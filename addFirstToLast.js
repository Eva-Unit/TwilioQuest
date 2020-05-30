function addFirstToLast(inputArray) {
    let addFirstToLast = '';

    if (inputArray.length > 0)
        firstAndLast = inputArray[0] + inputArray[inputArray.length - 1];

    else firstAndLast = '';

    return firstAndLast;
}
console.log(addFirstToLast(["Hello", "My", "Baby"]))