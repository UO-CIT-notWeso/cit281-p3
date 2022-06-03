// Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100.

function validDenomination(coin){
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;    
}


// Returns the calculated value of a single coin object from the obj function parameter.

function valueFromCoinObject(obj) {
    const {
        denom = 0, count = 0 } = obj;
    return denom * count;
}


// Iterates through an array of coin objects and returns the final calculated value of all coin objects.

function valueFromArray(arr) {
    if (Array.isArray(arr[0])) {
        arr = arr[0];
    }
    return arr.reduce((accumulator, currentObj) => accumulator + valueFromCoinObject(currentObj),0);
}


// Calls and returns the result of valueFromArray() function, which will be the value of all coin objects with the coinage array function parameter.

function coinCount(...coinage) {
    return valueFromArray(coinage);
}

//Export coinCount
module.exports = {
    coinCount
};

//Testing each of the four functions:

console.log("{}", coinCount({denom: 5, count: 3}));

console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));

const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];

console.log("...[{}]", coinCount(...coins));

//Extra Credit Attempt
console.log("[{}]", coinCount(coins));