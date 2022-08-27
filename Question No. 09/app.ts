// var letterNumber = /^[0-9a-zA-Z]+$/;

//9. Write a ts program to input any character and check whether it is alphabet, digit or special character.


var inputValue:any=prompt("enter alphabet, digit or special character.")

if (inputValue.match(/^[a-zA-Z]+$/)){
    console.log("alphabet")

}
else if (inputValue.match(/[0-9]/))
console.log("Number")
 
else{

    console.log("symbal")
}
 
 