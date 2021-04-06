var bestCustomer
var customerName = `bob`
const leastFavoriteCustomer = `Horrible Person`

// lab will not acept arrow functions for the 4 functions below
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    // declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now. 
    bestCustomer = `not bob`
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `New Horrible Person`
}