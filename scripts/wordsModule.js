// =============
// Words Module
// ==============

var wordsModule = (function() {

    // =================
    // Private Variables
    // =================

    var words = [
        'word1 word2 word2 etc',
        'word1 word2 word2 etc',
        'word1 word2 word2 etc'
    ];

    // ================
    // Public Variables
    // ================
    return {

        getWords(textNumber) {
            return words[textNumber];
        }

    };
}());



