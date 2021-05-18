"use script"

let monthlySalary = 5000.00;
let taxPercent = .23;
let tax = monthlySalary * taxPercent;
let yearlyTax = tax * 12;

console.log("The amount of taxes withheld monthly is " + tax.toFixed(2));
console.log("The taxes withheld for the year is " + yearlyTax);