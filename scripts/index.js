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
            // When we return an object and objects are passed by reference not by value. Meaning we are not returning a read only value
            // We are returning a reference to the object car making it easily mutable. We can fix this by instead returning a new object like this
            // return car;
            return {
                make: car.make,
                model: car.model
            }
        }
    }
})();

// Calls myModule and invokes the key's function for f1
console.log(myModule.f1());

// Calls myModule and invokes the key's function for f2
console.log(myModule.f2());

// Tries to reassign the value of model to A6 as opposed to A3
myModule.f2().model = 'A6';

// We keep our original protecting our object from being changed
console.log(myModule.f2().model);

// Calls the function with modified object
console.log(myModule.f2());

