// IIFE dataModule
var dataModule = (function() {

    // Shuffle function
    var shuffle = function (array) {
        var newArray = [];
        var randomIndex;
        var randomElement;
        while (array.length > 0) {
            // Take a random element from array and it to new array
            randomIndex = Math.floor(Math.random() * array.length);
            randomElement = array[randomIndex];
            newArray.push(randomElement);
            // Delete random element
            array.splice(randomIndex, 1);
        }
        return newArray;
    };

    // Capitalize random function

    // Add random punctuation function

    // =================
    // Private Variables
    // =================

    // Indicators / Test Control / Test Tesults
    var appData = {

        indicators: {
            testStarted: false, 
            testEnded: false, 
            totalTestTime: 0, 
            timeLeft: 0
        },

        results: {
            wpm: 0, 
            wpmChange: 0, 
            cpm: 0, cpmChange: 0, 
            accuracy: 0, accuracyChange: 0,
            numOfCorrectWords: 0,
            numOfCorrectCharacters: 0,
            numOfTestCharacters: 0   
        },

        words: {
            currentWordIndex: 0, 
            testWords: [], 
            currentWord: {
                // value: {
                //     correct: '', 
                //     user: '',
                //     isCorrect: false
                // },
                // characters: {
                //     correct: [],
                //     user: [],
                //     totalCorrect: 0,
                //     totalTest: 0
                // }
            } 
        },
    };
    var word = function(index){}; // Word constructor

    word.prototype.update =  function(value){}; // Update method  

        // ================
        // Public Variables
        // ================
        return {

            // Indicators - Test Control
            setTestTime: function(x){}, // Sets the toal test time to x

            initializeTimeLeft: function() {}, // Initialize time left to the total test time

            startTest: function() {}, // Starts the test

            endTest: function() {}, // Ends the test

            reduceTime: function() {}, // Reduces the time by 1 second

            timeLeft: function() {}, // Check is the test has already ended

            testEnded: function() {}, // Check is the test has already ended

            testStarted: function() {}, // Checks if the test has started

            getTimeLeft: function() {}, // Get time left: appData.timeLeft


            // Typing Test Results
            calculateWom: function() {}, // Calculates wpm and wpmChange and updates them in appData

            calculateCpm: function() {}, //Calculates cpm and cpmChange and updates them in appData

            calculateAccuracy: function() {}, //Calculates accuracy and accuracyChange and updates them in appData

            // ==========
            // Test Words
            // ==========

            // Fills words.testWords
            fillsListOfTestWords: function(textNumber, words) {
                var result = words.split(" ");
                
                if (textNumber == 0 ) {
                    // Shuffle words

                    // Capiitalize random strings

                    // Add random puncutation

                }
                appData.words.testWords = result;
            }, 

            getListOfWords: function(){}, //Get List of test words words.testWords

            moveToNewWord: function(){}, //Increments the currentWordIndex - Updated current word by creating a new instance of the word class - updates numOfCharacters, numOfCorrectWords, and numOfTestCharacters

            updateCurrentWord: function(value){} // Update current word using user input

        };
}());