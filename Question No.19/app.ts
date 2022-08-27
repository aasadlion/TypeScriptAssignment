// Q19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var subjectPhysics:any=prompt("Enter the Physics Marks out of 100")
var subjectChemistry:any=prompt("Enter the Chemistry Marks out of 100")
var subjectBiology:any=prompt("Enter the Biology Marks out of 100")
var subjectMathematics:any=prompt("Enter the Mathematics Marks out of 100")
var subjectComputer:any=prompt("Enter the Computer Marks out of 100")

var subject_Physics:number=parseInt(subjectPhysics)
var subject_Chemistry:number=parseInt(subjectChemistry)
var subject_Biology:number=parseInt(subjectBiology)
var subject_Mathematics:number=parseInt(subjectMathematics)
var subject_Computer:number=parseInt(subjectComputer)

var total_marks=500;
var obtained_marks=subject_Physics + subject_Chemistry + subject_Biology + subject_Mathematics + subject_Computer  
var Percentage:number=obtained_marks/total_marks*100;

if (obtained_marks<=500 && obtained_marks>0 ) {
    if (Percentage<=100 && Percentage>=90 ) {
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is A")
    
    }
    else if(Percentage<=89 && Percentage>=80){
    
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is B")
    
    }
    else if(Percentage<=79 && Percentage>=70){
    
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is C")
    
    }
    else if(Percentage<=69 && Percentage>=60){
    
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is D")
    
    }
    else if(Percentage<=59 && Percentage>=50){
    
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is E")
    
    }
    else{
    
        console.log("your Obtained marks is: ",obtained_marks,"Percentage is :",Percentage,"Grade is F")
    }

}
else{
    console.log("plz Enter your correct marks")
}