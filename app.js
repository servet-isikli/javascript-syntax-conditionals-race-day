let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;

let early = true;
let age = 19;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Race will begin at 9:30, your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will begin at 12:30, you race number is: ${raceNumber}.`);
}
