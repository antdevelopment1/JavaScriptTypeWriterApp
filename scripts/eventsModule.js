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
        // Init function, initializes the test before start
        init: function(duration, textNumber){
            
            // Fill the list of test words: data Module
          
            var words = wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber, words);
            
            // Fill the list of test words: UI Module
            // var lineReturn = dModule.getLineReturn();
            // var testWords = dModule.getListOfTestWords();
            // uModule.fillContent(testWords);

            var lineReturn = dModule.getLineReturn();
            var testWords = dModule.getListOfTestWords();
            uModule.fillContent(testWords, lineReturn);
            
            // Set the total test time
            
            // Update time left: data Module
            
            // Update time left: UI module
            
            // Move to a new word: data Module
            
            // Set active Word: UI Module
            
            // Format the active word: UI Module
            
            // Focus on text input: UI Module
            
            
            // Add avent listeners
            addEventListeners();
        }
    };
            
}(dataModule, UIModule, certificateModule, wordsModule));