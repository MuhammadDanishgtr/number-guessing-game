#! /usr/bin/env node
import inquirer from "inquirer";
const computergeneratedno = Math.floor(Math.random() * 10 + 1);
const userguessed = await inquirer.prompt([
    { message: "guess a ramdom number b/w 1-10:", type: "number", name: "userguess" }
]);
if (userguessed.userguess === computergeneratedno) {
    console.log("congratz you win");
}
else {
    console.log("you are a looser better luck next time");
}
console.log(`right answer is: ` + computergeneratedno);
