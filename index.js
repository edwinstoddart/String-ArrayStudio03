const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let cargoHold = ['', '', '', ''];
let cabinet0 = ['', '', '', ''];
let cabinet1 = ['', '', '', ''];
let cabinet2 = ['', '', '', ''];
let cabinet3 = ['', '', '', ''];
let num = 0;
let item = '';

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet0 = food.split(',').sort();
cabinet1 = equipment.split(',').reverse().sort();
cabinet2 = pets.split(',').sort();
cabinet3 = sleepAids.split(',').sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold[0] = cabinet0;
cargoHold[1] = cabinet1;
cargoHold[2] = cabinet2;
cargoHold[3] = cabinet3;
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
num = Number(input.question('Please select a cabinet in the cargo hold to inspect (0, 1, 2, or 3): '));

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (num <= cargoHold.length-1 && num >= 0) {
  item = input.question(`What are you looking for inside cabinet #${num}?\n`);
  console.log(`Thank you! the contents of cabinet #${num} are as follows:\n${cargoHold[num].join(', ')}`);
  if (cargoHold[num].includes(item.toLowerCase())) {
    console.log(`Cabinet #${num} does contain ${item}.`);
  } else {
    console.log(`I'm sorry, cabinet #${num} does not contain ${item}.`);
  }
} else {
  console.log(`I'm sorry, we don't have a cabinet #${num} in this cargo hold.`);
}


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
