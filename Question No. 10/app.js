/// Q10 Write a ts program to check whether a character is uppercase or lowercase alphabet.
var character = prompt("Enter the uppercase or lowercase alphabet. ");
if (character >= "a" || character >= "z" && character >= "A" || character >= "Z") {
    console.log(character, "character is lowercase alphabet.");
}
else {
    console.log(character, "character is uppercase alphabet.");
}
