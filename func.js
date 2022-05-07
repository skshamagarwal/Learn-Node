// Function vs Callback Functions

// Normal Function
function sum(a, b) {
    return a + b;
}

// Anonymous Function
var add = function (a, b) {
    return a + b;
}
console.log(add(40, 5))

// Callback Function
function complexEx(add){
console.log(add(200, 300));
}
complexEx(add);

// Anonymous Function with Callback