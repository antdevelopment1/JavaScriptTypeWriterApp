// =============
// Events Module
// ==============

var eventsModule = (function(dModule, uModule, cModule, wModule) {

    // =================
    // Private Variables
    // =================
    var addEventListeners = function() {

        // Enter click event
        uModule.getDOMElements().textInput.addEventListener('keydown', function(event) {
            console.log(event)
            // Check if test ended and if it has do nothing
            if (dModule.testEnded()) {
                return;
            }

            // Check if the user pressed enter
            var key = event.keyCode;
            if(key == 13) {
                uModule.getDOMElements().textInput.value += dModule.getLineReturn() + ' ';

                // Create a new input event
                var inputEvent = new Event('input');

                // Dispach it
                uModule.getDOMElements().textInput.dispatchEvent(inputEvent);
            }
        })

        // Character typing event listener
        uModule.getDOMElements().textInput.addEventListener('input', function(event) {
            // Check if test ended and if it has do nothing
            if (dModule.testEnded()) {
                return;
            }

            // Check if the test has not started yet and if it has we will start the test and countdown
            if (dModule.testStarted()) {
                // Start the test
            }
            // Get the typed word in UI Module
            var typedWord = uModule.getTypedWord();

            // Update the current word in Data Module
            dModule.updateCurrentWord(typedWord);

            // Format the active word
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);

            // Check if the user pressed space or enter
            if (uModule.spacePressed(event) || uModule.enterPressed(dModule.getLineReturn())) {
                // Empty text input
                uModule.emptyInput();

                // Deactivate the current word
                uModule.deactivateCurrentWord();

                // Move to a new Word in Data Module
                dModule.moveToNewWord();
            
                // Set active Word: UI Module
                var index = dModule.getCurrentWordIndex();
                uModule.setActiveWord(index);
                
                // Format the active word: UI Module
                var currentWord = dModule.getCurrentWord();
                uModule.formatWord(currentWord);

                // Sroll word into the middle view
                uModule.scroll();
            }
        })

        // Click on download button event listener

        // Click on restart button event listener

    };
    // Scroll active word into middle view on window resize
    window.addEventListener('resize', uModule.scroll);
 
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

