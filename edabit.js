function triArea(base, height) {
    return (base * height) / 2
}

function cubes(a) {
    return a ** 3
}
// 3 ** 4 = 81 so it takes the first number and multiplies itself based om the second number
//3 * 3 * 3 * 3 = 81


function numArgs() {
    return arguments.length
}
//This function returns the arguments by number. (x,y,z) return 3

function addition(num) {
    return num + 1
}
//This function takes in a single argument and returns it plus 1

function findPerimeter(length, width) {
    return (length * 2) + (width * 2)
}
// This function returns a rectangle perimeter

function addition(a, b) {
    return a + b
}
//this function returns two functions added together

function sumPolygon(n) {
    return  (n - 2) * 180
}
//This function returns the sum of a polygon

function remainder(x, y) {
    return x % y
}
//returns modular

function convert(minutes) {
    return minutes * 60
}
// minutes to seconds

function lessThan100(a, b) {
    if(a + b >= 100) {
        return false
    } else {
        return true
    }
}
//

function squared(b) {
    return b * b
}
//Squared

function printArray(number) {
    var newArray = [];

    for(var i = 1; i <= number;) {
        newArray.push(i);
    }

    return newArray;
}
