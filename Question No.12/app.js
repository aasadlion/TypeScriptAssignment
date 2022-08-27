// Q12. Write a ts program to input month number and print number of days in that month.
var month = prompt("Enter the month Name");
var monthName = month.toLowerCase();
if (monthName == "january" || monthName == "march" || monthName == "july" || monthName == "august" || monthName == "october" || monthName == "december") {
    monthName * 31;
    console.log("Total days of ", monthName, "is 31");
}
else if (monthName == "april" || monthName == "june" || monthName == "september" || monthName == "november") {
    console.log("Total days of ", monthName, "is 30");
}
else if (monthName == "february") {
    console.log("Total days of ", monthName, "is 28 days common year 29 days leap year");
}
else {
    console.log("Plase enter the correct ", monthName);
}
