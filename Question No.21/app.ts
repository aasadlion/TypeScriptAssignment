// Q 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 5/unit
// For next 100 units Rs. 10/unit
// For next 100 units Rs. 15/unit
// For unit above 250 Rs. 30/unit
// An additional surcharge of 20% is added to the bill

var electricityUnit:any=prompt("Enter your Electricity Unit");
var electricity_Unit:number=parseInt(electricityUnit)

if (electricity_Unit <= 50) {
    
let bill:number=electricity_Unit*5;
let surcharge:number=20/100*bill;
let Total_bill:number=bill+surcharge

    console.log("Total electricity unit is:",electricity_Unit,"total electricity bill is",Total_bill)
} 
else if(electricity_Unit <= 100){
    
    let bill:number=electricity_Unit*10;
    let surcharge:number=20/100*bill;
let Total_bill:number=bill+surcharge
    console.log("Total electricity unit is:",electricity_Unit,"total electricity bill is",Total_bill)
}

else if(electricity_Unit <= 150){
   
    let bill:number=electricity_Unit*15;
    let surcharge:number=20/100*bill;
    let Total_bill:number=bill+surcharge
    console.log("Total electricity unit is:",electricity_Unit,"total electricity bill is",Total_bill)
}

else if(electricity_Unit <= 250){
   
    let bill:number=electricity_Unit*20;
    let surcharge:number=20/100*bill;
    let Total_bill:number=bill+surcharge
    console.log("Total electricity unit is:",electricity_Unit,"total electricity bill is",Total_bill)
}
else{

    
    let bill:number=electricity_Unit*35;
    let surcharge:number=20/100*bill;
    let Total_bill:number=bill+surcharge
    console.log("Total electricity unit is:",electricity_Unit,"total electricity bill is",Total_bill)
}
