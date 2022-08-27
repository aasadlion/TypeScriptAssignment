//Q14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var side1 = prompt("Enter the triangle sider 1");
var side2 = prompt("Enter the triangle sider 2");
var side3 = prompt("Enter the triangle sider 3");
var triangleSide1 = parseInt(side1);
var triangleSide2 = parseInt(side2);
var triangleSide3 = parseInt(side3);
if (triangleSide1 + triangleSide2 >= triangleSide3 && triangleSide1 + triangleSide3 >= triangleSide2 && triangleSide2 + triangleSide3 >= triangleSide1) {
    console.log("side 1 =", triangleSide1, "side 2 =", triangleSide2, "side 3 =", triangleSide3, " triangle is valid");
}
else {
    console.log("side 1 =", triangleSide1, "side 2 =", triangleSide2, "side 3 =", triangleSide3, " triangle is not valid");
}
