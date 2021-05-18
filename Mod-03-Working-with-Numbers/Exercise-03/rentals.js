"use script"

let noPeople = 38;
let vans = Math.ceil(noPeople/15);
let vansCost = vans * 250;
let costPerPerson = vansCost/noPeople;

console.log("You need " + vans + "vans, costing $" + vansCost + ` for the day. It will cost $${costPerPerson.toFixed(2)} per person.`)