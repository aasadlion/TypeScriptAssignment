// Q 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%




var basicSalary:any=prompt("Enter your basic salary in R.s");

var basic_Salary=parseInt(basicSalary);


if (basic_Salary <= 10000) {
    
    let DA:number=80/100*basic_Salary;
    let HRA:number=20/100*basic_Salary;
    let Gross_salary:number=DA+HRA+basic_Salary; 
    console.log(basic_Salary, "is basic salary and Total Gross salary is :",Gross_salary)
}

else if(basic_Salary<20000){

    let DA:number=90/100*basic_Salary;
    let HRA:number=25/100*basic_Salary;
    let Gross_salary:number=DA+HRA+basic_Salary; 
    console.log(basic_Salary, "is basic salary and Total Gross salary is :",Gross_salary)


}
else if(basic_Salary > 20000){

    let DA:number=95/100*basic_Salary;
    let HRA:number=30/100*basic_Salary;
    let Gross_salary:number=DA+HRA+basic_Salary; 
    console.log(basic_Salary, "is basic salary and Total Gross salary is :",Gross_salary)

}

else{


    console.log("Enter your correct salary")
}