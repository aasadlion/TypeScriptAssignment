//// SQ6. Write a ts program to check whether a year is leap year or not.
var year = 2012;
if (year % 4 == 0 || year % 400 == 0) {
    console.log(year, "is a leap year");
}
else {
    console.log(year, "is not leap year");
}
