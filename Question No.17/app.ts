//Q17. Write a ts program to find all roots of a quadratic equation.

var valuea:any=prompt("Enter the value a")
var valueb:any=prompt("Enter the value b")
var valuec:any=prompt("Enter the value c")

var value_a=parseInt(valuea)
var value_b=parseInt(valueb)
var value_c=parseInt(valuec)
var root1:number,root2:number;
// find discriminant
var discriminant:number= value_b*value_b-4*value_a*value_c;
if (discriminant>0) {
root1=(-value_b + Math.sqrt(discriminant)/2*value_a)
root2=(-value_b + Math.sqrt(discriminant)/2*value_a)

console.log("roots of a quadratic equation",root1,"and",root2 )
    }

    else if(discriminant=0){
root1=root2=(-value_b/2*value_a)
console.log("roots of a quadratic equation",root1,"and",root2 )

    }
    else{

        let realPart = (-value_b / (2 * value_a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * value_a)).toFixed(2);
    
     
        console.log("The roots of quadratic equation are ",realPart, "+", imagPart,"and",realPart ,"-", imagPart);

    }