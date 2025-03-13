// Declare a global variable customerName
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring a global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Changing the value of bestCustomer
}

// Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'some value';

// Function to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // Attempting to change the constant
}
