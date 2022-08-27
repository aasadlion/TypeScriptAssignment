//Q8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var alphabet = "b";
var alphabet2 = alphabet.toLowerCase();
if (alphabet2 === "a" || alphabet2 === "e" || alphabet2 === "i" || alphabet2 === "o" || alphabet2 === "u") {
    console.log(alphabet2, "alphabet is vowel");
}
else {
    console.log(alphabet2, "alphabet is consonant");
}
