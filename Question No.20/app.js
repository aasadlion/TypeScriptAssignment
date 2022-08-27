// Q 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var basicSalary = prompt("Enter your basic salary in R.s");
var basic_Salary = parseInt(basicSalary);
if (basic_Salary <= 10000) {
    var DA = 80 / 100 * basic_Salary;
    var HRA = 20 / 100 * basic_Salary;
    var Gross_salary = DA + HRA;
    console.log(basic_Salary, "is basic salary and Total Gross salary is :", Gross_salary);
}
else if (basic_Salary < 20000) {
    var DA = 90 / 100 * basic_Salary;
    var HRA = 25 / 100 * basic_Salary;
    var Gross_salary = DA + HRA;
    console.log(basic_Salary, "is basic salary and Total Gross salary is :", Gross_salary);
}
else if (basic_Salary > 20000) {
    var DA = 95 / 100 * basic_Salary;
    var HRA = 30 / 100 * basic_Salary;
    var Gross_salary = DA + HRA;
    console.log(basic_Salary, "is basic salary and Total Gross salary is :", Gross_salary);
}
else {
    console.log("Enter your correct salary");
}
