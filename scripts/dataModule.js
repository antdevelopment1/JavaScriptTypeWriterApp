// =================
// Private Variables
// =================

// Indicators / Test Control / Test Tesults
var appData = {
    indicators: {testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0},
    results: {wpm: 0, wpmChange: 0, cpm: 0, cpmChange: 0, accuracy: 0, accuracyChange: 0}
};
console.log(appData);

// ================
// Public Variables
// ================
var dataModule = (function() {
    
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

        // Typing Test Results
        calculateWom: function() {}, // Calculates wpm and wpmChange and updates them in appData
        calculateCpm: function() {}, //Calculates cpm and cpmChange and updates them in appData
        calculateAccuracy: function() {} //Calculates accuracy and accuracyChange and updates them in appData
    }

}());