//1. Pokémon Battle – Function Basics
function compareAttack(pokemon1, attack1, pokemon2, attack2) {
    if (attack1 > attack2) {
        return `${pokemon1} is stronger!`;
    } else if (attack2 > attack1) {
        return `${pokemon2} is stronger!`;
    } else {
        return "Both Pokemon are equally strong!";
    }
}

console.log(compareAttack("Pikachu", 55, "Charizard", 84));
//////////////////////////////////////////////////

//2. Hogwarts Spell Casting – Function Parameters
function castSpell(spell, wizard) {
    return `${wizard} casts ${spell}!`;
}

console.log(castSpell("Expelliarmus", "Hermione"));
//////////////////////////////////////////////////


//3. One Piece Bounty Calculator – Return Values
function calculateBounty(currentBounty, increase) {
    return currentBounty + increase;
}
const newBounty = calculateBounty(1500_000_000, 500_000_000);
console.log(newBounty);
//////////////////////////////////////////////////

//4. Jedi Training – Default Parameters
function trainJedi(name, strength = 50) {
    return `${name} has ${strength} Power`;
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));
//////////////////////////////////////////////////

//5. Gollum’s Precious – String Manipulation
function gollumSays(phrase) {
    return `${phrase}... ${phrase}... ${phrase}...`;
}
console.log(gollumSays("My precious"));
//////////////////////////////////////////////////


//6. Super Mario Power-Up – Function Expressions
const powerUp = function (jumpHeight) {
    return jumpHeight * 2;
};

console.log(powerUp(5));
//////////////////////////////////////////////////

//7. Naruto’s Shadow Clone Jutsu – Arrow Functions
const shadowClone = (count) => count * 5;

const clones = shadowClone(10);
console.log(`${clones} clones created!`);
//////////////////////////////////////////////////


//8. Sorting the Sorting Hat – Callback Functions
function assignHouse() { // callbackF
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    const randomIndex = Math.floor(Math.random() * houses.length);
    return houses[randomIndex];
}

function sortStudent(name, callback) { // use callbackF
    console.log(`Sorting ${name} into...`);
    const house = callback();
    console.log(`${name} has been sorted into ${house}!`);
}

sortStudent("Harry", assignHouse);
//////////////////////////////////////////////////

//9. Infinity Gauntlet – Function Scope
function snapFingers() {
    const stones = 6;
    function checkStones() {
        console.log(`Thanos has ${stones} stones. The universe trembles!`);
    }
    checkStones();
}

snapFingers();
//////////////////////////////////////////////////

//10. Time-Turner – Function Hoisting
turnBackTime(); // call func before

function turnBackTime() {
    console.log("Going back in time!");
}
//////////////////////////////////////////////////
//11. Batman’s Secret Identity – Function Closures
function batman(name) {
    let num = 0;
    return function revealIdentity() {
        return `${name} says: I am Batman! - ${num += 1}`;
    }
}

const func = batman("Bruce");

console.log(func());
console.log(func());
console.log(func());
//////////////////////////////////////////////////

//12. The Enchanted Mirror – Higher-Order Functions
function callBackFunc(message) {
    return message.toUpperCase();
}

function magicMirror(message, transformFunction) {
    const transformedMessage = transformFunction(message);
    return `The mirror says: ${transformedMessage}`;
}

console.log(magicMirror("Will I be rich?", callBackFunc));
