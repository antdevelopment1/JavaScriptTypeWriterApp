// IIFE dataModule
var dataModule = (function() {
    // =================
    // Private Variables
    // =================
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
    String.prototype.capitalize = function() {
        var newString = '';
        var firstCharCap = this.charAt(0).toUpperCase();
        // Start to slice at the element with an index of 1 and goes all the way until end
        var remainingChar = this.slice(1);
        newString = firstCharCap + remainingChar;
        return newString;
    }

    // Capitalize random function
    var capitalizeRandom = function(arrayOfStrings) {
        return arrayOfStrings.map(function(currentWord) {
            var x = Math.floor(4 * Math.random());

            return (x == 3) ? currentWord.capitalize() : currentWord;
        })
    }

    // Add random punctuation function
    var addRandomPunctuation = function(arrayOfStrings) {
        return arrayOfStrings.map(function (currentWord) {
            var randomPunctuation;
            var items = [lineReturn, '?', ',', ',', ',', ',', '.', '.', '!', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            var randomIndex = Math.floor(Math.random() * items.length);
            randomPunctuation = items[randomIndex];
            return currentWord + randomPunctuation;
        });
    };
    
    // Character call back used to calculate the number of correct chacracters inside the current word
    var nbCorrectChar;
    var charCallback = function(currentElement, index) {
        nbCorrectChar += (currentElement == this.characters.user[index]) ? 1 : 0;
    };

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
                value: {
                    correct: '', 
                    user: '',
                    isCorrect: false
                },
                characters: {
                    correct: [],
                    user: [],
                    totalCorrect: 0,
                    totalTest: 0
                }
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

    // Update method   updates the word using the word typed by the user
    word.prototype.update =  function(value){
        // Update the user value
        this.value.user = value;

        // Update the words status (correct or not)
        this.value.isCorrect = (this.value.correct == this.value.user);

        // Update the user characters //
        this.characters.user = this.value.user.split('');

        // Calculate the number of correct characters 
        nbCorrectChar = 0;

        
       var charCallback2 = charCallback.bind(this);
        this.characters.correct.forEach(charCallback2);

        this.characters.totalCorrect = nbCorrectChar;
    }; 

        // ================
        // Public Variables
        // ================
        return {

            // Indicators - Test Control

            // Sets the toal test time to x
            setTestTime: function(x){
                appData.indicators.totalTestTime = x;
            }, 

            // Initialize time left to the total test time
            initializeTimeLeft: function() {
                appData.indicators.timeLeft = appData.indicators.totalTestTime;
            }, 

            // Starts the test
            startTest: function() {
                appData.indicators.testStarted = true;
            }, 
            
            // Ends the test
            endTest: function() {
                appData.indicators.testEnded = true;
            }, 

            // Get time left: appData.timeLeft
            getTimeLeft: function() {
                return appData.indicators.timeLeft;
            }, 
            
            // Reduces the time by 1 second
            reduceTime: function() {
                appData.indicators.timeLeft --;
                return appData.indicators.timeLeft;
            }, 

            // Check is the test has already ended
            timeLeft: function() {
                return appData.indicators.timeLeft != 0;
            }, 

            // Check is the test has already ended
            testEnded: function() {
                return appData.indicators.testEnded;
            }, 
            
            // Checks if the test has started
            testStarted: function() {
                return appData.indicators.testStarted;
            }, 
            


            // Typing Test Results
            // Calculates wpm and wpmChange and updates them in appData
            calculateWpm: function() {
                var wpmOld = appData.results.wpm;
                var numOfCorrectWords = appData.results.numOfCorrectWords;
                if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
                  appData.results.wpm = Math.round( 60 * numOfCorrectWords / (appData.indicators.totalTestTime - appData.indicators.timeLeft));
                } else {
                    appData.results.wpm = 0;
                }
                appData.results.wpmChange = appData.results.wpm - wpmOld;

                return [appData.results.wpm, appData.results.wpmChange];
            },

            //Calculates cpm and cpmChange and updates them in appData
            calculateCpm: function() {
                var cpmOld = appData.results.cpm;
                var numOfCorrectCharacters = appData.results.numOfCorrectCharacters;
                if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
                  appData.results.cpm = Math.round( 60 * numOfCorrectCharacters / (appData.indicators.totalTestTime - appData.indicators.timeLeft));
                } else {
                    appData.results.cpm = 0;
                }
                appData.results.cpmChange = appData.results.cpm - cpmOld;

                return [appData.results.cpm, appData.results.cpmChange];
            }, 

            //Calculates accuracy and accuracyChange and updates them in appData
            calculateAccuracy: function() {
                var accuracyOld = appData.results.accuracy;
                var numOfCorrectCharacters = appData.results.numOfCorrectCharacters;
                var numberOfTestCharacters = appData.results.numOfTestCharacters;

                if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
                    if(numberOfTestCharacters != 0) {
                        appData.results.accuracy = Math.round( 100 * numOfCorrectCharacters / numberOfTestCharacters);
                    } else {
                        appData.results.accuracy = 0;
                    }
                } else {
                    appData.results.accuracy = 0;
                }
                appData.results.accuracyChange = appData.results.accuracy - accuracyOld;

                return [appData.results.accuracy, appData.results.accuracyChange];
            }, 

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
                    result = capitalizeRandom(result);
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
                    if (appData.words.currentWord.value.isCorrect == true) {
                        appData.results.numOfCorrectWords++;
                    }

                    // Update the number of correct characters
                    appData.results.numOfCorrectCharacters += appData.words.currentWord.characters.totalCorrect;

                    // Update number of test words
                    appData.results.numOfTestCharacters += appData.words.currentWord.characters.totalTest;
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

            // Update current word using user input
            updateCurrentWord: function(value){
                appData.words.currentWord.update(value);
            }, 

            getLineReturn() {
                return lineReturn;
            },

            returnData() {
                console.log(appData);
            }

        };
}());

