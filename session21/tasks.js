////////////////////////////////////////////////////
// Exercise 1: The Power of Variables and Operators
let gandalfPower = 80;
let dumbledorePower = 85;

gandalfPower += 20; // Boost Gandalf
dumbledorePower -= 5; // Weaken Dumbledore

console.log(`Gandalf's Power: ${gandalfPower}`);
console.log(`Dumbledore's Power: ${dumbledorePower}`);

if (gandalfPower > dumbledorePower) {
  console.log("Gandalf is stronger!");
} else if (dumbledorePower > gandalfPower) {
  console.log("Dumbledore is stronger!");
} else {
  console.log("They are equally strong!");
}
/////////////////////////////////////////////////////


// Exercise 2: The Treasure Chest of Data Types
let goldCoins = 100;
let treasureMap = "Old map with faded ink";
let cursedAmulet = true;

console.log(typeof goldCoins);      // number
console.log(typeof treasureMap);    // string
console.log(typeof cursedAmulet);   // boolean

treasureMap = "Ancient map with clear directions";
console.log(treasureMap);
/////////////////////////////////////////////////////

//Exercise 3: The Potion Shop’s Price Calculator
let healthPotionPrice = 15;
let manaPotionPrice = 20;

let totalCost = (3 * healthPotionPrice) + (2 * manaPotionPrice);

if (totalCost > 50) {
  totalCost *= 0.9; 
}

console.log(`Total Cost: ${totalCost} gold`);
/////////////////////////////////////////////////////
//Exercise 4: The Brave Knight’s Inventory
let swordPower = 50;
let armorName = "Dragon Scale Armor";
let hasShield = true;

console.log(`Sir Debugalot is ready with his ${armorName}, sword power ${swordPower}, and shield: ${hasShield}`);
/////////////////////////////////////////////////////
//Exercise 5: The Bakery's Daily Earnings
let breadPrice = 2;
let cakePrice = 5;

let breadSold = 50;
let cakesSold = 20;

let earnings = (breadPrice * breadSold) + (cakePrice * cakesSold);

console.log(`Today's Bakery Earnings: ${earnings} coins`);
/////////////////////////////////////////////////////
//Exercise 6: The Space Mission’s Fuel Check
let fuelCapacity = 1000;
let currentFuel = 850;

let requiredFuel = fuelCapacity * 0.8;
if (currentFuel >= requiredFuel) {
  console.log("Launch Status: Ready for launch!");
} else {
  console.log("Launch Status: Not enough fuel.");
}
/////////////////////////////////////////////////////

//Exercise 7: The Time Traveler’s Stopwatch
let currentYear = new Date().getFullYear();
let yearsJumped = -30;

let newYear = currentYear + yearsJumped;

console.log(`Time Traveler's New Year: ${newYear}`);

/////////////////////////////////////////////////////
//Exercise 8: The Wizard’s Spell Strength Test

let fireSpell = 40;
let iceSpell = 35;
let lightningSpell = 50;

if (fireSpell > iceSpell && fireSpell > lightningSpell) {
  console.log("Fire spell is the strongest!");
} else if (iceSpell > fireSpell && iceSpell > lightningSpell) {
  console.log("Ice spell is the strongest!");
} else if (lightningSpell > fireSpell && lightningSpell > iceSpell) {
  console.log("Lightning spell is the strongest!");
} else {
  console.log("Some spells are equally strong!");
}
/////////////////////////////////////////////////////
//Exercise 9: The Haunted House Mystery
let kitchenHasGhost = true;
let livingRoomHasGhost = false;

let isHouseSafe = !kitchenHasGhost && !livingRoomHasGhost;

if (isHouseSafe) {
  console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
} else {
  console.log("Danger! The house is NOT safe. Ghosts detected!");
}
/////////////////////////////////////////////////////
//Exercise 10: The Robot’s Battery Check
let batteryLevel = 25;

if (batteryLevel > 30) {
  console.log("Battery sufficient");
} else {
  console.log("Low battery");
}
/////////////////////////////////////////////////////
//Exercise 11: The Dragon’s Health Meter
let dragonHealth = 100;
let knightAttackDamage = 25;

dragonHealth -= knightAttackDamage;

console.log(`Dragon's Health After Attack: ${dragonHealth}`);
/////////////////////////////////////////////////////
//Exercise 12: The Speeding Race Car
let speedLimit = 50;
let carSpeed = 30;

carSpeed += 25;

if (carSpeed > speedLimit) {
  console.log("Speed Warning: You are going too fast!");
} else {
  console.log("Speed is okay.");
}

console.log(`Current Speed: ${carSpeed}`);
/////////////////////////////////////////////////////
//Exercise 13: The Superhero Strength Test
let heroStrength = 80;
let villainStrength = 90;

if (heroStrength === villainStrength) {
  console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
} else if (heroStrength > villainStrength) {
  let diff = heroStrength - villainStrength;
  if (diff > 10) {
    console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
  } else {
    console.log("Valiant barely edges out! A close call victory against Malakor!");
  }
} else {
  let diff = villainStrength - heroStrength;
  if (diff > 10) {
    console.log("Malakor's power is overwhelming! Valiant is soundly defeated!");
  } else {
    console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
  }
}
/////////////////////////////////////////////////////
//Exercise 14: The Tricky Treasure Hunt

// Step 1: Declare the variables
let hasTreasureMap = true;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false; // this does not affect success but could be used in extended logic

// Step 2: Define the condition to find the treasure
// Alex can find the treasure if:
// 1. He has the treasure map (hasTreasureMap === true) AND
// 2. Either he has the ancient key (foundAncientKey === true),
//    OR he solved the riddle (solvedRiddleScroll === true) AND has a compass (hasCompass === true)

// Logical expression
let canFindTreasure = hasTreasureMap && (foundAncientKey || solvedRiddleScroll && hasCompass);

// Step 3: Print the result
if (canFindTreasure) {
  console.log("Success! Alex can find the legendary treasure!");
} else {
  console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}
/////////////////////////////////////////////////////













