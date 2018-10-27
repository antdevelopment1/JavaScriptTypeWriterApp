// =======================
// Modular Design Patterns
// =======================


// Creates an IIFE
var myModule = (function() {
    // Private variables and functions
    var x = 1;


    // Public variables and functions
    // Returns an object with a key called f1 and its value is a function that returns x
    return {
        f1: function () {
            return x;   
        }
    }
})();

// Calls myModule and invokes the key's function
console.log(myModule.f1());