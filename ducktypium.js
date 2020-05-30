
class Ducktypium {
    constructor(color) {
        this.color = color;
        if (this.color != "red" && this.color != "blue" && this.color != "yellow") {
            throw ("Color must be red, blue or yellow");
        }
        this.calibrationSequence = [];
    }


    refract(colorR) {
        if (colorR != "red" && colorR != "blue" && colorR != "yellow") {
            throw ("Color must be red, blue or yellow");
        } else if (this.color == colorR) {
            return colorR;
        } else if (this.color == "red" && colorR == "blue") {
            return "purple";
        } else if (this.color == "blue" && colorR == "red") {
            return "purple";
        } else if (this.color == "red" && colorR == "yellow") {
            return "orange";
        } else if (this.color == "yellow" && colorR == "red") {
            return "orange";
        } else if (this.color == "yellow" && colorR == "blue") {
            return "green";
        } else if (this.color == "blue" && colorR == "yellow") {
            return "green";
        }

    }
    calibrate(arr) {
        let newarr = [];
        arr.sort()
        arr.map(function (element) {
            newarr.push(element * 3);
        }); this.calibrationSequence = newarr;

    }

}


// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]