//Q16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var side1 = prompt("Enter the triangle sider 1");
var side2 = prompt("Enter the triangle sider 2");
var side3 = prompt("Enter the triangle sider 3");
var triangleSide1 = parseInt(side1);
var triangleSide2 = parseInt(side2);
var triangleSide3 = parseInt(side3);
if (triangleSide1 == triangleSide2 && triangleSide2 == triangleSide3) {
    console.log("side 1 =", triangleSide1, "side 2 =", triangleSide2, "side 3 =", triangleSide3, " This is an equilateral triangle");
}
else if (triangleSide1 == triangleSide2 || triangleSide2 == triangleSide3 || triangleSide1 == triangleSide3) {
    console.log("side 1 =", triangleSide1, "side 2 =", triangleSide2, "side 3 =", triangleSide3, " This is an isosceles triangle");
}
else {
    console.log("side 1 =", triangleSide1, "side 2 =", triangleSide2, "side 3 =", triangleSide3, " This is an scalene triangle");
}
