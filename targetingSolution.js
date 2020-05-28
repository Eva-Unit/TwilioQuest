class TargetingSolution {
    constructor(x, y, z) {
        function target() {
            return ("(" + x + ", " + y + ", " + z + ")")
        }
    }
    // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
});

console.log(m.target()); // would print "(10, 15, 900)"