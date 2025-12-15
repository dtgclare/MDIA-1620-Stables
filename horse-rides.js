// Problem #1
// Today, you've opened your stables for free rides!
//
// Register the age of each customer in line outside, preferrably in an array.
//
// Customers under the age of 10 can only ride ponies.
// If there are no ponies available, only customers over the age of 10 are allowed to ride.
//
// Create a function that handles the following:
// - If there are no ponies:
//   - Customers over the age of 10 should get a message logging out "Rides available!".
//   - Customers under the age of 10 should get a message logging out "All the ponies are out, please wait!".
// - If there are ponies, console.log "Everyone, come inside!".
//
// Keep track of whether there are ponies or not in an object called "settings".
//
// Challenge: add a setting for the age requirement to enter. By default, it should be 10, but you should be able to change
// it by invoking a function that accepts the new entry age as an argument. This also means that the age for the notification
// needs to be updated to match the new entry requirements.

const customerAge = [2, 7, 10, 12];

const settings = {
    availablePonies: true,
    ageRequirement: 10,
};

function updatedEntryAge(newEntryAge) {
    settings.ageRequirement = newEntryAge;
    console.log(
        "The new entry requirement is updated, so now accepted to " +
            newEntryAge +
            "!"
    );
}

function unavailablePonies(age) {
    if (customerAge >= settings.ageRequirement) {
        console.log("Rides available!");
    } else if (customerAge < settings.ageRequirement) {
        console.log("All the ponies are out, please wait!");
    }
}

function availablePonies(ponies) {
    if (settings.availablePonies) {
        console.log("Everyone, come inside!");
        return;
    }
}

updatedEntryAge(10);
availablePonies(customerAge);

settings.availablePonies = false;
unavailablePonies(customerAge);

settings.availablePonies = true;
availablePonies(customerAge);
