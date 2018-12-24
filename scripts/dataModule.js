// IIFE dataModule
var dataModule = (function() {
    var lineReturn = '|';
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

    // Capitalize first letter of a string
    String.prototype.capaitalize = function() {
        var newString = '';
        var firstCharCap = this.charAt(0).toUpperCase();
        // Start to slice at the element with an index of 1 and goes all the way until end
        var remainingChar = this.slice(1);
        newString = firstCharCap + remainingChar;
        return newString;
    }

    // Capitalize random function
    var capaitalizeRandom = function(arrayOfStrings) {
        return arrayOfStrings.map(function(currentWord) {
            var x = Math.floor(4 * Math.random());

            return (x == 3) ? currentWord.capaitalize() : currentWord;
        })
    }

    // Add random punctuation function
    var addRandomPunctuation = function(arrayOfStrings) {
        return arrayOfStrings.map(function (currentWord) {
            var randomPunctuation;
            var items = [lineReturn, '?', ',' , ',' , ',' , ',' , ',', '.', '.', '.', '!', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',];
            var randomIndex = Math.floor(Math.random() * items.length);
            randomPunctuation = items[randomIndex];
            return currentWord + randomPunctuation;
        });
    };
    
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
            currentWordIndex: -1, 
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

    // Word constructor
    var word = function(index){
        this.value = {
            correct: appData.words.testWords[index] + " ",
            user: '',
            isCorrect: false
        };
        this.characters = {
            correct: this.value.correct.split(''),
            user: [],
            totalCorrect: 0,
            totalTest: this.value.correct.length
        };
    }; 

    word.prototype.update =  function(value){}; // Update method  

        // ================
        // Public Variables
        // ================
        return {

            // Indicators - Test Control

            // Sets the toal test time to x
            setTestTime: function(x){
                appData.indicators.totalTestTime = x;
            }, 

            initializeTimeLeft: function() {
                appData.indicators.timeLeft = appData.indicators.totalTestTime;
            }, // Initialize time left to the total test time

            startTest: function() {}, // Starts the test

            endTest: function() {}, // Ends the test

            getTimeLeft: function() {
                return appData.indicators.timeLeft;
            }, // Get time left: appData.timeLeft
            
            reduceTime: function() {}, // Reduces the time by 1 second

            timeLeft: function() {}, // Check is the test has already ended

            testEnded: function() {}, // Check is the test has already ended
            
            testStarted: function() {}, // Checks if the test has started
            


            // Typing Test Results
            calculateWom: function() {}, // Calculates wpm and wpmChange and updates them in appData

            calculateCpm: function() {}, //Calculates cpm and cpmChange and updates them in appData

            calculateAccuracy: function() {}, //Calculates accuracy and accuracyChange and updates them in appData

            // ==========
            // Test Words
            // ==========

            // Fills words.testWords
            fillListOfTestWords: function(textNumber, words) {
                var result = words.split(" ");
                
                if (textNumber == 0 ) {
                    // Shuffle words
                    result = shuffle(result);
                    // Capiitalize random strings
                    result = capaitalizeRandom(result);
                    // Add random puncutation
                    result = addRandomPunctuation(result);

                }
                appData.words.testWords = result;
            }, 

            //Get List of test words words.testWords
            getListOfTestWords: function(){
                return appData.words.testWords;
            }, 

            // Increments the currentWordIndex - Updated current word by creating a new instance of the word class - updates numOfCharacters, numOfCorrectWords, and numOfTestCharacters
            moveToNewWord: function(){

                if (appData.words.currentWordIndex > -1) {
                    // Update the number of correct words

                    // Update the number of correct characters

                    // Update number of test words
                }

                appData.words.currentWordIndex++;
                var currentIndex = appData.words.currentWordIndex;
                var newWord = new word(currentIndex);
                appData.words.currentWord = newWord;
            },
            
            // Get the current word index
            getCurrentWordIndex() {
                return appData.words.currentWordIndex;
            },

            // Get current word
            getCurrentWord() {
                var currentWord = appData.words.currentWord;
                return {
                    value: {
                        correct: currentWord.value.correct,
                        user: currentWord.value.user
                    }
                };
            },

            updateCurrentWord: function(value){}, // Update current word using user input

            getLineReturn() {
                return lineReturn;
            },

            returnData() {
                console.log(appData);
            }

        };
}());


