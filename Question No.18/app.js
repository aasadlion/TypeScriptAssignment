//Q18. Write a ts program to calculate profit or loss.
var sellingPrice = prompt("Enter the Selling price");
var costPrice = prompt("Enter the cost price");
var selling_Price = parseInt(sellingPrice);
var cost_Price = parseInt(costPrice);
if (selling_Price >= costPrice) {
    var profit = selling_Price - cost_Price;
    console.log("Selling Price is =", selling_Price, "Coat Price", cost_Price, "and profit is", profit);
}
else {
    var lose = cost_Price - selling_Price;
    console.log("Selling Price is =", selling_Price, "Coat Price", cost_Price, "and loss is", lose);
}
