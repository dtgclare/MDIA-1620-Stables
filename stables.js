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

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

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

// Lab #1 //

let horseName = "Biscuit";
let horseAge = 4;
let isHorseInside = true;
let monthlyBoardCost = 3000;
let lateFee = monthlyBoardCost * 1.2;

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
    lateFee +
    ".";

console.log(visitorMessage);
console.log(latePaymentMessage);

//------------------------- First day (Lab #2, Week 4) -------------------------//

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

// Lab #2 //

let horseObjOne = {
    name: "Gigelle",
    nickname: "G",
    favoriteTreat: "Leaves",
    age: 8,
    monthlyRent: 360,
    location: true,
    personality: "Shy",
    scent: "Vanila",
};

let horseObjTwo = {
    name: "Zemma",
    nickname: "Zizi",
    favoriteTreat: "Zucchini",
    age: 7,
    monthlyRent: 591,
    location: true,
    personality: "Fearful",
    scent: "Floral",
};

let horseObjThree = {
    name: "Peggie",
    nickname: "Gou",
    favoriteTreat: "Pasta",
    age: 12,
    monthlyRent: 1240,
    location: false,
    personality: "Social",
    scent: "Woody",
};

// week 1 horse info //

let horseObjFour = {
    name: "Biscuit",
    nickname: "Butter",
    favoriteTreat: "Apple Crumnble Pie",
    age: 4,
    monthlyRent: 777,
    location: true,
    personality: "Shy",
    scent: "Citrus",
};

// another horse info //

let horseObjFive = {
    name: "Autumn",
    nickname: "Hazel",
    favoriteTreat: "Pumpkin Spice Tart",
    age: 2,
    monthlyRent: 294,
    location: false,
    personality: "Social",
    scent: "Water",
};

horses[0].isHungry = true;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true;
horses[4].isHungry = false;

console.log(horses);
