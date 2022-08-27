// Q2. Write a ts program to find maximum between three numbers.
var num1 = 50;
var num2 = 90;
var num3 = 40;
if (num1 >= num2 && num1 >= num3) {
    console.log("Number_1=", num1, " is grater then number", num2, "or", num3);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log("Number_2=", num2, " is grater then number", num1, "or", num3);
}
else {
    console.log("Number_3 =", num3, " is grater then number", num1, "or", num2);
}
