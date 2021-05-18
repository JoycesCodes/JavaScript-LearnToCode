"use script"

let length = 18;
let width = 56;
let roomDimensions = length * width;
let tileAmount = Math.ceil(roomDimensions/144);
let extraTiles = roomDimensions * 1.1;
let extraTileAmount = Math.ceil(extraTiles/144);

console.log("You need " + tileAmount + " boxes of tiles." )
console.log(`To be sure, pick up ${extraTileAmount} boxes.`)