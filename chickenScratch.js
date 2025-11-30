/*
// NOTE //
// cd - change directory
// mkdir - make directory
// touch - creates a file
// rm - removes a file
// dir/ls - lists files in a directory

// Change Direction - cd {directory_name}
// Print Working Directory - pwd
// list - ls
// node stables.js

// strings always ""
// numbers always 24342
// boolean always true/false
// array always []
// index always starts at 0

// cmd + shift + . show hidden files
// git commit = git commit -am ""


// class exercise 1 //

let horseOneName = "Biscuit";
let horseTwoName = "Butter";
let horseThreeName = "Bunnie";

let horseNames = [horseOneName, horseTwoName, horseThreeName];
let horseAges = [4, 7, 3000];

console.log(horseNames);
console.log(horseNames.length);
console.log(horseNames[2]);

let horseOne = ["Biscuit", 4];
let horseTwo = ["Butter", 7];

console.log(
    "My horse is named " +
        horseOne[0] +
        " and they are " +
        horseOne[1] +
        " years old! Next year they will be " +
        (horseOne[1] + 1)
);

let horseArr = ["Biscuit", 4, "Bengie"];
// horseArr[0] = "Biscuit"

let horseObj = {
    name: "Biscuit",
    age: 4,
    nickname: "Bengie",
};

let horseTwo = {
    name: "Butter",
    age: 7,
    nickname: "Cookie",
};

let horses = [horseObj, horseTwo];

horseObj.favoriteSnack = "Burritos";
horseObj["monthlyRent"] = 300;

console.log(
    horses.length +
        " horses in mt stables. Their names are " +
        horses[0]["name"] +
        " and " +
        horses[1]["name"] +
        "!"
);

// Lab #1a //

let horseName = "Biscuit";
let horseAge = 4;
let isHorseInside = true;
let monthlyFee = 3000;
let latePayment = monthlyFee * 0.2;

let visitorMessage =
    "Welcome to the stable everyone" +
    "." +
    " Here is my horse " +
    horseName +
    "." +
    " Please feel free to meet " +
    horseName +
    ":)";

let latePaymentMessage =
    "If your payment is late for " +
    horseName +
    "," +
    " It will cost $" +
    latePayment +
    ".";

console.log(visitorMessage);
console.log(latePaymentMessage);

// Lab #1b //

let horses = {
    Gigelle: {
        name: "Gigelle",
        nickname: "G",
        favoriteTreat: "Leaves",
        age: 8,
        rent: monthlyFee,
        isInside: isHorseInside,
        personality: "Shy",
        scent: "Vanila",
    },

    Zemma: {
        name: "Zemma",
        nickname: "Zizi",
        favoriteTreat: "Zucchini",
        age: 7,
        rent: monthlyFee,
        isInside: true,
        personality: "Fearful",
        scent: "Floral",
    },

    Peggie: {
        name: "Peggie",
        nickname: "Gou",
        favoriteTreat: "Pasta",
        age: 12,
        rent: monthlyFee,
        isInside: false,
        personality: "Social",
        scent: "Woody",
    },
};

// week 1 horse info //

let oldHorse = {
    name: "horseName",
    nickname: "Butter",
    favoriteTreat: "Apple Crumble Pie",
    age: 4,
    monthlyRent: 777,
    isInside: true,
    personality: "Shy",
    scent: "Citrus",
};

// another horse info //

let newHorse = {
    name: "Autumn",
    nickname: "Hazel",
    favoriteTreat: "Pumpkin Spice Tart",
    age: 2,
    monthlyRent: 294,
    isInside: false,
    personality: "Social",
    scent: "Water",
};

horses.Autumn = newHorse;

horses.Gigelle.isHungry = true;
horses.Zemma.isHungry = true;
horses.Peggie.isHungry = false;
horses.Autumn.isHungry = true;

console.log(horses.Gigelle.name + " is " + horses.Gigelle.age + " years old!");
console.log(horses.Zemma.name + " is " + horses.Zemma.age + " years old!");

// class exercise 2 //

function printHorseAge(horseAge, horseName) {
    console.log(
        horseName +
            " is " +
            horseAge +
            " years old! Next year, they will be " +
            (horseAge + 1) +
            " years old!"
    );
}

printHorseAge(horses.Gigelle.age, horses.Gigelle.name);
printHorseAge(horses.Zemma.age, horses.Zemma.name);

let changer = "hello world";
changer = "meowww world";

const MONTHLY_RENT = 300;

function payMe(rent = MONTHLY_RENT) {
    let amount = "You owe me " + rent + " dollars!";
    return amount;
}

console.log(amount);
console.log(payMe(777));

payMe(450);
payMe(10000);

let horseNames = ["Gigelle", "Zemma", "Peggie"];
console.log(
    "My horses are called " +
        horseNames[0] +
        ", " +
        horseNames[2] +
        ", and " +
        horseNames[1]
);

console.log("My horses are called " + horseNames);
console.log("My horses are named " + horseNames.join());

function squareThisNumber(chosenNumber) {
    console.log(
        "The square of " + chosenNumber + " is " + chosenNumber * chosenNumber
    );
}

squareThisNumber(3);
squareThisNumber(11);
squareThisNumber(13234);

function addTheseTwoThings(firstThingToAdd, secondThingToAdd) {
    console.log(
        "When you add " +
            firstThingToAdd +
            " and " +
            secondThingToAdd +
            ", you get a total of " +
            (firstThingToAdd + secondThingToAdd)
    );
}

let firstNumber = 2;
let secondNumber = 22;
let arrayOfNumbers = [3, 9, 17, 42];

addTheseTwoThings(3, 7);
addTheseTwoThings(24, 37);
addTheseTwoThings(firstNumber, secondNumber);
addTheseTwoThings(arrayOfNumbers[0], arrayOfNumbers[2]);
addTheseTwoThings(arrayOfNumbers, 3);

// lab #2 //

let totalStalls = 7;
let totalhorses = 4;

function availableStalls(horses) {
    let availableStalls = totalStalls - totalhorses;
    console.log(
        "There are " + availableStalls + " stalls available in my stables" + "!"
    );
}
availableStalls(3);

let rentPayment = 777;

function lateRentPayment(rent) {
    const lateRentPayment = rentPayment * 2;
    let totalAmount = rentPayment * 2;
    console.log(
        "If your payment is late" +
            "," +
            " you will pay " +
            totalAmount +
            " dollars" +
            " for an individual horse" +
            "."
    );
}
lateRentPayment(1554);

function horseNickname(horseName = "Zemma") {
    let nickname = horseName;
    return nickname;
}

let finalNickname = horseNickname("Zemma");

console.log("The one of my horse's nickname is " + finalNickname + "!");

// lab #2 edited ver. //

const NUMBER_OF_STALLS = 10;

function availableStalls(numberOfStalls, numberOfHorses) {
    let numberOfAvailableStalls = numberOfStalls - numberOfHorses;
    console.log("There are " + numberOfAvailableStalls + " stalls available!");
}

function latePaymentNotice(horse) {}

function gimmeThatNickname(horse) {
    return (
        "This is " +
        horse.name +
        ", they are so sick, and their friends like to call them" +
        horse.nickname +
        "!"
    );
}

latePaymentNotice(horses.gigelle);
availableStalls(NUMBER_OF_STALLS, 3);
console.log(gimmeThatNickname(horses.gigelle));

// class exercise 3 //

// write a statement that checks to see if need to order more
// if there are 10 or more bunches, we have enough
// if have less than 10, order more

let bunchesOfCarrots = 10;

if (bunchesOfCarrots >= 10) {
    // CB: if(10 >= 10)
    console.log("We have enough carrots to feed everyone!");
} else {
    console.log("We need to order more carrots, STAT!");
}

let bunchesOfSpinach = 5;

if (bunchesOfSpinach >= 10) {
    // CB: if(5 >= 10)(false)
    console.log("We have enough spinach to feed everyone!");
} else {
    console.log("We need to order more spinach, STAT!");
}

// write a statement to see if the horse in Biscuit's stall is in fact Biscuit, or if it's a different horse

if (horses.biscuit.name === "Butter") {
    // CB: if(false)
    console.log("Hi Biscuit!");
} else {
    console.log("Uhh you are not Biscuit!");
}

if (horses.biscuit.name === "Butter") {
    // CB: if("Biscuit" !== "Butter")
    // even though there is a negative in here. the entire condition itself is true: "Biscuit" is NOT identical to "Butter"
    console.log("Uhh you are not Biscuit");
} else {
    console.log("Hi Biscuit!");
}

// 1. write a statement that checks if TWO CONDITIONS are true

if (five === 5 && ten === 10) {
    // CB: (5 === 5 (true) AND 10 === 10 (true))
    console.log("Everything about this statement is true!");
} else {
    console.log(
        "There are at least one part of this statement that evaluates to false"
    );
}

if (five === 5 && ten === 11) {
    // CB: (5 === 5 (true) AND 10 === 11 (false))
    // CB: (true, false) - when using &&, this will evaluate to false
    console.log("Everything about this statement is true!");
} else {
    console.log(
        "There are at least one part of this statement that evaluates to false"
    );
}

// 2. write a statement that checks if AT LEAST ONE thing is true

if (five === 5 || ten === 11) {
    // CB: (5 === 5 (true) OR 10 === 11 (false))
    // CB: (true, false) - when using ||, this will evaluate to TRUE
    console.log("At least one thing about this statement is true!");
} else {
    console.log("Everything about this statement is a false");
}

// 3. write a statement that checks if something is NOT true

if (five === 6 || ten === 11) {
    // CB: (5 === 6 (false) OR 10 === 11 (false))
    console.log("At least one thing about this statement is true!");
} else {
    console.log("Everything about this statement is a false");
}

// exercise

let isUserAuthenticated = false;

if (isUserAuthenticated) {
    return;
} else {
    console.log("hey, go log in and stop hacking!");
}

if (isUserAuthenticated === false) {
    console.log("hey...");
}

if (!isUserAuthenticated) {
    //CB: NOT isUserAuthenticated
    //CB: it's TRUE, b/c isUserAuthenticated === false, and
    // NOT FALSE === true
    console.log("hey, go log in and stop hacking@");
}


// Week 10 Loops //

// a++
// a = a + 1;
// for loop
// - initializer
// (let i = 0)
// (let soneVariable equal what number I want to start counting from)
// what number do i start counting from?
//
// - condition
// when do i stop counting?
// if this statement is still true, keep counting
// Until someVariable reaches a certain amount, keep going
//
// - iterator
// (i++)
// how much should I increment the initializer by each time I run through the loop

// for (let a = 0; a < 10; a++) {
//     console.log(a);
// }

let treats = ["carrots", "raspberry", "pumpkin"];

console.log("My treats array has " + treats.length + " things in it.");
console.log("Hey horse, come get your " + treats[0] + "!");
console.log("Hey horse, come get your " + treats[1] + "!");
console.log("Hey horse, come get your " + treats[2] + "!");

for (let i = 0; i < treats.length; i++) {
    console.log(treats[i]);
}

let grossFood = ["celery", "blue cheese", "honey", "dark chocolate"];

for (let i = 0; i < grossFood.length; i++) {
    console.log(grossFood[i]);
}

let treats = ["carrots", "raspberry", "pumpkin"];
let horses = ["Gigelle", "Zizi", "Biscuit"];

for (let i = 0; i < horses.length; i++) {
    console.log(i);
}

for (let counter = 0; counter < 3; counter++) {
    console.log(counter);
}

for (let counter = 0; counter < 3; counter++) {
    console.log("counter");
}

let counterConditional = treats.length; // 3

let numberTwo = 2;

for (let counter = 0; counter < treats.length; counter++) {
    console.log(
        "My horse " + horses[numberTwo] + " likes " + treats[numberTwo] + "!"
    );
}


let horses = [
    {
        name: "Gigelle",
        faveTreat: "sour candy",
        isInside: true,
    },
    {
        name: "Zizi",
        faveTreat: "butter",
        isInside: false,
    },
    {
        name: "Biscuit",
        faveTreat: "pumpkin",
        isInside: true,
    },
];

// horse.length = 3
for (let i = 0; i < horses.length; i++) {
    let name = horses[i]["name"];
    let treat = horses[i]["faveTreat"];
    let isHorseInside = horses[i]["isInside"];

    if (!isHorseInside) {
        console.log(name + ", come inside please, and get your " + treat + "!");
    } else {
        console.log(name + ", good job on already being cozy!");
    }
}



// Week 11 Objects & Functions //

let studentNamedRachel = "Rachel";

let studentInClass = [studentNamedRachel, "Ross", "Joey", "Chandler"];

let classInfo = {
    course: "French 101",
    time: "13:00",
    classroom: "SE14 120",
    students: [
        {
            name: studentNamedRachel,
            gpa: 3.5,
            yearEnrolled: 2025,
            age: 20,
        },
        {
            name: "Ross",
            gpa: 4.5,
            yearEnrolled: 2025,
            age: 16,
        },
    ],
};

classInfo.students[0].name; // "Rachel"
classInfo.students[1].name; // "Ross"

let ross = "Ross";
ross.length; //4

let horse = {
    name: "Biscuit",
    color: "golden",
    age: 4,
    breed: "Mustang",
    nickname: "Shortcake",
};

console.log(horse);

// Variables are created using let, const, or var

let horseName = "Pumpkin";

"My favorite fruit is " + horseName;
("My favorite fruit is Pumpkin");

// Declaration
function horseIntro(name, nickname) {
    console.log(
        "This horse's name is " +
            name +
            ", but you can call her " +
            nickname +
            "!"
    );
}

// Invocation
horseIntro("Gigelle", "Storm");



let horseNamedPumpkin = {
    name: "Pumpkin",
    color: "orange",
    age: 4,
    breed: "Mustang",
    nickname: "Pie",
    intro: function () {
        console.log(
            "This horse's name is " +
                this.name +
                ", but you can call her " +
                this.nickname +
                "!"
        );
    },
};

let horseNamedCustard = {
    name: "Custard",
    color: "yellow",
    age: 2,
    breed: "Mustang",
    nickname: "Cici",
    intro: function () {
        console.log(
            "This horse's name is " +
                this.name +
                ", but you can call her " +
                this.nickname +
                "!"
        );
    },
};

horseNamedPumpkin.faveTreat = "Pumpkin";

function horseHorse(horseName, horseNickname) {
    const obj = {};

    obj.name = horseName;
    obj.nickname = horseNickname;
    obj.rent = 150;
    obj.isInside = true;
    obj.intro = function () {
        console.log("Welcome, " + horseName);
    };
    return obj;
}

let horseNamedFrank = createHorse("Frank", "Ocean");
let horseNamedCentral = createHorse("Central", "Cee");
let horseNamedKendrick = createHorse("Kendrick", "Lamar");

console.log(horseNamedFrank);
console.log(horseNamedCentral);
console.log(horseNamedKendrick);


// Week 12 //

// A little bit more of functions (the if's) identify the true and falses
// This question is assuming that all functions have a conditional

// FUNCTION
function someFunction(param) {
    return param;
}

// CONDITIONAL
if (someThing === true) {
    // do something
} else {
    // do something else
}

// Conditionals can exist inside a function
// Here is a function with a conditional inside
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
}

// Here is a conditional
if (checkNumber(5) === "Positive") {
}

// A function usually has:
// - the function keyword
// - parameters (optional)
// - a body (code inside the function)
// - a return statement (optional)

let message = "Yo";

function sayHi(name, greet) {
    let message = greet + ", " + name + "!";
}

console.log(message);
sayHi("Alice", "Hello");
// message is assigned to: "Hello, Alice"

// In the example above:
// - "function" is the keyword
// - name is greet
// - parameters are name and greeting
// - the body is everything inside the curly braces {}
// - the return statement

// A conditional usually has:
// - the if keyword
// - a condition (expression that evaluates to true or false)

let doesPersonExist = true;
if (person) {
    console.log("This is true");
}
// "This is true"

// if want to check two things and make sure both are true
// &&
// both sides need to be true for the whole expression to be true

if (15 === 15 && "hello" === "hello") {
    console.log("This is true");
}

// if want to check two things and make sure at least one is true
// ||
// only one sides need to be true for the whole expression to be true

if (15 === 15 || "hello" === "goodbye") {
    console.log("This is true");
}

// LOOPS
// Iterate through things
// Array are easy to iterate through because they are just comma separated lists
let arr = [10, 20, 30, 40, 50];
arr[0]; // 10
arr[1]; // 20
arr[2]; // 30

// For loops always look like this:
// 1. Initialization/counter
// 2. Condition
// 3. Incrementor / Decrementor

for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
}

*/

// Week 13 //

let a = 3;
let b = 5;

function dangerouslyAddNumbers(firstNumber, secondNumber) {
    let sum = a + b;
    return sum;
}

dangerouslyAddNumbers(3, 4);
// => 8

dangerouslyAddNumbers(12, 10);
// => 8

dangerouslyAddNumbers(1903, 37);
// => 8

function dangerouslyAddNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}

dangerouslyAddNumbers(3, 4);
// => 7

dangerouslyAddNumbers(12, 10);
// => 22

dangerouslyAddNumbers(1903, 37);
// => 1940
