//Q7. Write a ts program to check whether a character is alphabet or not.
var inputValue = prompt("Enter the alphabet");
if (inputValue.match(/[a-zA-Z]/)) {
    console.log("alphabet");
}
else
    (console.log("Not a alphabet"));
