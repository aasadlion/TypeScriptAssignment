//Q18. Write a ts program to calculate profit or loss.

var sellingPrice:any=prompt("Enter the Selling price")

var costPrice:any=prompt("Enter the cost price")

var selling_Price=parseInt(sellingPrice)
var cost_Price=parseInt(costPrice)

if (selling_Price>=costPrice) {
let profit:number=selling_Price-cost_Price;

    console.log("Selling Price is =",selling_Price,"Coat Price",cost_Price,"and profit is",profit );
    
    
}
else{
    let lose:number=cost_Price-selling_Price;
    console.log("Selling Price is =",selling_Price,"Coat Price",cost_Price,"and loss is",lose );
}