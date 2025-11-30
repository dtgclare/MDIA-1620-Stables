// Welcome!
//
//
//
//               /\       /\
//              /  \_____/  \
//             /             \
//            |    o     o    |
//            |       >       |
//            |     \___/     |
//             \             /
//              \___________/
//
//

//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message that welcomes visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

let horses = [];
let welcomeMessage = "Welcome to my final stables!";
let latePayment = 377;
let numberOfAvailableStalls = 7;

console.log(welcomeMessage);

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

function Horse(
    name,
    nickname,
    favoriteTreat,
    age,
    monthlyRentFee,
    isHorseInside,
    scent,
    personality
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRentFee = monthlyRentFee;
    this.isHorseInside = isHorseInside;
    this.scent = scent;
    this.personality = personality;
}
const firstHorse = {
    name: "Biscuit",
    nickname: "Butter",
    favoriteTreat: "Shortcake",
    age: 4,
    monthlyRentFee: 222,
    isHorseInside: true,
    scent: "Vanilla",
    personality: "Fearful",
    isHungry: false,
};

const secondHorse = {
    name: "Pumpkin",
    nickname: "Chai",
    favoriteTreat: "Pumpkin pie",
    age: 7,
    monthlyRentFee: 333,
    isHorseInside: true,
    scent: "Spice",
    personality: "Sensitivity",
    isHungry: false,
};

const thirdHorse = {
    name: "Jaguar",
    nickname: "Grrr",
    favoriteTreat: "Fried Chicken",
    age: 3,
    monthlyRentFee: 444,
    isHorseInside: false,
    scent: "Earthy",
    personality: "Playful",
    introduce: function () {
        console.log(
            "Hi there," +
                "This is " +
                this.name +
                "," +
                "and " +
                this.name +
                "is" +
                this.age +
                "years old and he loves " +
                this.favoriteTreat +
                "!"
        );
    },
    rentNotice: function () {
        console.log(
            "Your horse" +
                this.name +
                "rent payment will" +
                this.monthlyRentFee +
                "!"
        );
    },
    isHungry: false,
};

horses.push(firstHorse, secondHorse, thirdHorse);

let newHorse = {
    name: "Tarzzan",
    nickname: "Kki-kki",
    favoriteTreat: "Hwaiian Pizza",
    age: 2,
    monthlyRentFee: 555,
    isHorseInside: false,
    scent: "Fruity",
    personality: "Friendly",
    isHungry: true,
};

horses.push(newHorse);

firstHorse.isHungry = false;
secondHorse.isHungry = false;
thirdHorse.isHungry = false;
newHorse.isHungry = true;

console.log(firstHorse.isHungry);
console.log(secondHorse.isHungry);
console.log(thirdHorse.isHungry);
console.log(newHorse.isHungry);

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

console.log(horses);

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

numberOfAvailableStalls = 7;
const addedHorse = 4;
availableStalls = numberOfAvailableStalls - addedHorse;

console.log(availableStalls);

if (numberOfAvailableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log("We have " + availableStalls + " available!");
}

function individualHorseLateFee(horse) {
    let totalLateFee = horse.monthlyRentFee + latePayment;
    console.log(
        "If the rent paid late, " +
            horse.name +
            " will pay " +
            totalLateFee +
            "."
    );
}

individualHorseLateFee(firstHorse);
individualHorseLateFee(secondHorse);
individualHorseLateFee(thirdHorse);
individualHorseLateFee(newHorse);

let checkHorseLikeTreats = "Shortcake";

for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];

    if (horse.favoriteTreat === checkHorseLikeTreats) {
        console.log(
            checkHorseLikeTreats + " is must have treat for " + horse.name + "!"
        );
    } else {
        console.log(
            checkHorseLikeTreats +
                " is not must have treat for " +
                horse.name +
                ".."
        );
    }
}

function horseNickname(horse) {
    return horse.nickname;
}

let resultOfNickname = horseNickname(thirdHorse);
console.log(resultOfNickname);

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function horsePersonality(horse) {
    if (horse.personality === "Playful") {
        console.log(horse.name + " has playful personality!");
    } else {
        console.log(horse.name + " has different personality..");
    }
}

horsePersonality(firstHorse);
horsePersonality(secondHorse);
horsePersonality(thirdHorse);
horsePersonality(newHorse);

function moveHorsesOutside() {
    for (let i = 0; i < horses.length; i++) {
        horses[i].isHorseInside = false;
        console.log(
            horses[i].name + " has been moved outside to spend time in the sun!"
        );
    }
}

moveHorsesOutside();

function horseLocation(horse) {
    horse.isHorseInside = !horse.isHorseInside;
    if (horse.isHorseInside) {
        console.log(horse.name + " moved inside!");
    } else {
        console.log(horse.name + " moved outside!");
    }
}

horseLocation(firstHorse);
horseLocation(secondHorse);
horseLocation(thirdHorse);
horseLocation(newHorse);

function feedHorses(horse) {
    if (!horse.isHorseInside) {
        horse.isHorseInside = true;
        console.log("Come inside to eat, " + horse.name + "!");
    }
    console.log("Come inside and get your favorite treat, " + horse.name + "!");
}

feedHorses(firstHorse);
feedHorses(secondHorse);
feedHorses(thirdHorse);
feedHorses(newHorse);

function bedTime(horse) {
    if (!horse.isHorseInside) {
        horse.isHorseInside = true;
        console.log("Come inside for bed time, " + horse.name + "!");
    }
}

bedTime(firstHorse);
bedTime(secondHorse);
bedTime(thirdHorse);
bedTime(newHorse);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
