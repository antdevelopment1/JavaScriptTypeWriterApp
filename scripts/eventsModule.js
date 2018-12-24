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
            
            // Fill the list of test words: Data Module
            var words = wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber, words);
            
            // Fill the list of test words: UI Module
            var lineReturn = dModule.getLineReturn();
            var testWords = dModule.getListOfTestWords();
            uModule.fillContent(testWords, lineReturn);
            
            // Set the total test time
            dModule.setTestTime(duration);
            
            // Update time left: Data Module
            dModule.initializeTimeLeft();
            
            // Update time left: UI module
            var timeLeft = dModule.getTimeLeft();
            uModule.updateTimeLeft(timeLeft);
            
            // Move to a new word: Data Module
            dModule.moveToNewWord();
            
            // Set active Word: UI Module
            var index = dModule.getCurrentWordIndex();
            uModule.setActiveWord(index);
            
            // Format the active word: UI Module
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            
            // Focus on text input: UI Module
            
            // Add avent listeners
            addEventListeners();
        }
    };
            
}(dataModule, UIModule, certificateModule, wordsModule));
