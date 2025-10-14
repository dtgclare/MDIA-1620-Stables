// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1a, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

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

//------------------------- First day (Lab #1b, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

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

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function

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
