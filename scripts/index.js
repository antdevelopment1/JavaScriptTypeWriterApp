// =======================
// Modular Design Patterns
// =======================


// Creates an IIFE
var myModule = (function() {

    // Private variables and functions
    var x = 1;

    // Creates a private object with two key value pairs
    var car = {
        make: 'Audi',
        model: 'A3'
    }
    

    // Public variables and functions
    // Returns an object with a key called f1 and its value is a function that returns x
    return {
        f1: function () {
            return x;   
        },
        f2: function() {
            return car;
        }
    }
})();

// Calls myModule and invokes the key's function for f1
console.log(myModule.f1());

// Calls myModule and invokes the key's function for f2
console.log(myModule.f2());

// Reassigns the value of model to A6 as opposed to a#=3
myModule.f2().model = 'A6';

// Calls the function with modified object
console.log(myModule.f2());

