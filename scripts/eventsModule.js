// =============
// Events Module
// ==============

var eventsModule = (function(dModule, uModule, cModule, wModule) {

    // =================
    // Private Variables
    // =================
    var addEventListeners = function() {

        // Character typing event listener

        // Click on download button event listener

        // Click on restart button event listener

    };
 
    // ================
    // Public Variables
    // ================
    return {

        // Init function intializes the test before start
        init: function(duration, testNumber) {

            // Fill the list of test words: UI Module
            var words = wModule.getWords(testNumber);

            dModule.fillsListOfTestWords(testNumber, words);

            // Set the total test time

            // Update the time left: Data Module

            // Update the time left: UI Module

            // Move to a new word: Data Module

            // Set active word: UI Module

            // Format the active word: UI Module

            // Focus on texy input: UI Module

            // Add all event listeners

            addEventListeners();

        }
    };  
}(dataModule, UIModule, certificateModule, wordsModule));