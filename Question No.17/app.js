//Q17. Write a ts program to find all roots of a quadratic equation.
var valuea = prompt("Enter the value a");
var valueb = prompt("Enter the value a");
var valuec = prompt("Enter the value a");
var value_a = parseInt(valuea);
var value_b = parseInt(valueb);
var value_c = parseInt(valuec);
var root1, root2;
// find discriminant
var discriminant = value_b * value_b - 4 * value_a * value_c;
if (discriminant > 0) {
    root1 = (-value_b + Math.sqrt(discriminant) / 2 * value_a);
    root2 = (-value_b + Math.sqrt(discriminant) / 2 * value_a);
    console.log("roots of a quadratic equation", root1, "and", root2);
}
else if (discriminant = 0) {
    root1 = root2 = (-value_b / 2 * value_a);
    console.log("roots of a quadratic equation", root1, "and", root2);
}
else {
    var realPart = (-value_b / (2 * value_a)).toFixed(2);
    var imagPart = (Math.sqrt(-discriminant) / (2 * value_a)).toFixed(2);
    console.log("The roots of quadratic equation are ", realPart, "+", imagPart, "and", realPart, "-", imagPart);
}
