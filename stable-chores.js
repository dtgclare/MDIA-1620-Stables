// Problem #2
// Chores at the stable!
//
// Create a simple system that will track the number of chores in different categories: "yardwork", "grooming", "stalls", and "completed".
// To start, each category should have 0 chores.
//
// Create and invoke a function that allows you to add a chore to any category, by passing in the category name.
// When called, the function should:
// - Increment the chore count of the chosen category by one
// - Log each category and the number of chores in it
//
// Challenge:
// Modify your function so that it accepts a parameter, willLogCount, that when true, logs out the total number of uncompleted chores.
// willLogCount should have a default parameter value of false.
// Based on the number of chores, log out:
// - Less than 5 chores: "take it easy, not much to do today"
// - Between 5 and 15 chores: "there's work to do, time to get to chorin'"
// - Between 15 and 25 chores: "better get up early, there is a lot to do"
// - More than 25 chores: "CALL IN THE REINFORCEMENTS, YOU'RE COOKED"

const numberOfChore = { yardwork: 0, grooming: 0, stalls: 0, completed: 0 };

function addChore(category, willLogCount = true) {
    if (numberOfChore(category)) {
        console.log("The category ");
    }
}

numberOfChore[category]++;

console.log("The chore counts is");
for (const numberOfChore in chores) {
    console.log(`${numberOfChore}: ${chores}`);
}

if (willLogCount) {
    const totalUncompletedChore =
        chores.yardwork + chores.grooming + chores.stalls;
    console.log("The total uncompleted chore is " + totalUncompletedChore);

    if (totalUncompletedChore < 5) {
        console.log("take it easy, not much to do today");
    } else if (5 < totalUncompletedChore < 15) {
        console.log("there's work to do, time to get to chorin'");
    } else if (15 < totalUncompletedChore < 25) {
        console.log("better get up early, there is a lot to do");
    } else if (totalUncompletedChore > 25) {
        console.log("CALL IN THE REINFORCEMENTS, YOU'RE COOKED");
    }
}

numberOfChore("yardwork");
numberOfChore("grooming");
numberOfChore("stalls");
numberOfChore("completed");

addChore("yardwork");
addChore("grooming");
addChore("stalls");
addChore("completed");
