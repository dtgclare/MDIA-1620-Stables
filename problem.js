// Time to go shopping for stable supplies
//
// Create a program that tracks items added to a shopping cart.
//
// Initialize the program with an array of objects, representing a cart that already contains 3 items,
// where each object represents an item with a name (string) and a price (number).
//
// There should be a function that accepts:
// - the array of objects representing items in the cart
// - an object representing an item to add, also containing a name and price.
//
// The function should:
// - add a new entry to the array of items in the cart
// - log out a message that lets the user know the name of the item added to the cart
// - return the total number of items in the cart.
//
// Separately, use the return value of the function to log out how many items are in the cart.
//
// BONUS: Inside the function, log out "You can no longer use the express checkout!"
// if there are 7 or more items in the cart.

// exercise //

let shoppingCart = [
    { item: "Cowboy Boots", price: 40 },
    { item: "Cowboy Hat", price: 30 },
    { item: "Cowboy Jacket", price: 60 },
];

function addItem(newItem, cart) {
    console.log("The item is added to the cart!");

    if (item >= 7) {
        console.log("You can no longer use the express checkout!");
    }

    return cart;
}

// review //

let cart = [
    { name: "Carrot Cake", price: 7 },
    { name: "Chesse Cake", price: 10 },
    { name: "Raspberry Cake", price: 12 },
];

let rivalCart = [
    { name: "Rhuburb Cake", price: 15 },
    { name: "Strawberry Cake", price: 14 },
    { name: "Matcha Cake", price: 17 },
];

function updateCart(currentCart, itemToAdd) {
    currentCart.push(itemToAdd);
    console.log(itemToAdd.name + " is added to the cart!");

    if (currentCart.length >= 7) {
        console.log("You can no longer use the express checkout!");
    }

    return currentCart.length;
}

let numberOfItemsInCart = updateCart(cart, { name: "Pumpkin Pie", price: 11 });
console.log("There are " + numberOfItemsInCart + " things in your cart!");

updateCart(rivalCart, { name: "Matcha Cake", price: 17 });
