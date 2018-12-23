var UIModule = (function() {

    // =================
    // Private Variables
    // =================

    // Classes used to select HTML elements
    var DOMElments = {

        // Indicators / Test Control
        timeLeft: '', // HTML element displaying time left

        // Test Results
        wpm: '',
        wpmChange: '', 
        cpm: '', 
        cpmChange: '', 
        accuracy: '', 
        accuracyChange: '',

        // User Input
        textInput: '', 
        nameInput: '',

        // Test Words
        content: document.getElementById('content'),
        activeWord: '',

        // Modal
        modal: ''

    };

    var splitArray = function(string) {
        return string.split('');
    };

    var addSpace = function(array) {
        array.push(' ');
        return array;
    };

    var addSpanTags = function(array) {
        return array.map(function(currentCharacter) {
            return '<span>' + currentCharacter + '</span>';
        });
    };

    var addWordSpanTags = function(array) {
        array.push('</span>');
        array.unshift('<span>');
        return array;
    };

    var joinEachWord = function(array) {
        return array.join('');
    };

    

    // ================
    // Public Variables
    // ================
    return {

        // Get DOM Elements
        getDOMElements: function(){},

        // Indicators / Test Control
        updateTimeLeft: function(){},

        // Test Results
        updateResults: function(){},

        fillModal: function(){}, 

        showMadal: function(){},

        // User Input
        inputFocus: function(){}, 

        isNameEmpty: function(){}, 

        flagNameInput: function(){},

        spacePressed: function(){}, 

        enterPressed: function(){}, 

        emptyInput: function(){},

        getTypedWord: function(){},

        // Test Words
        fillContent: function(array, lineReturn){
            var content = array.map(splitArray);
            content = content.map(addSpace);
            content = content.map(addSpanTags);
            content = content.map(addWordSpanTags);
            content = content.map(joinEachWord);
            content = content.join('');
            // This line of code wiill not work so the next line is a solution we can us to change all pipe characters into carrage returns
            // content = content.replace('<span>|</span>', '<span>&crarr;</span>');
            content = content.split('<span>|</span>').join('<span>&crarr;</span>')
            console.log(content)

            DOMElments.content.innerHTML = content;
         
        }, 

        formatWord: function(wordObject, wordHTML){}, 

        setActiveWord: function(index){},

        deactivateCurrentWord: function(){}, 

        scroll: function(){},

    };

}());