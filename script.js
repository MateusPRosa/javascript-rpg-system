'use strict';

const name = "Mateus";
const age = 17;
const classe = "Warrior";
let level = 67;
let xp = 60;
let gold = 300;
let trainingTime = 60;

console.log(name);

let earnedXp = trainingTime >= 60 ? 10 : 5;

function bonusXp (earnedXp, classe){
    if (classe === "Mage"){
        earnedXp = earnedXp * 1.4;
        console.log("You are a Mage! Your bonus xp is: 1.4");
    } else if (classe === "Warrior"){
        earnedXp = earnedXp * 1.5;
        console.log("You are a Warrior! Your bonus xp is: 1.5");
    } else {
        earnedXp = earnedXp * 1.6;
        console.log("You are an Archer! Your bonus xp is: 1.6");
    }
    return earnedXp;
}

earnedXp = bonusXp(earnedXp, classe);

xp = xp+earnedXp;

if (xp >= 100){
    console.log(`You reached a new level! Now your level is: ${level + 1}`);
} else {
    console.log(`You stay at the same level!`);
}








