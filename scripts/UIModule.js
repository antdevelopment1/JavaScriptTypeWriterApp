var UIModule = (function() {

    // =================
    // Private Variables
    // =================

    // Classes used to select HTML elements
    var DOMElements = {

        // Indicators / Test Control
        timeLeft: document.getElementById('timeLeft'), // HTML element displaying time left

        // Test Results
        wpm: document.getElementById('wpm'),
        wpmChange: document.getElementById('wpmChange'), 
        cpm: document.getElementById('cpm'), 
        cpmChange: document.getElementById('cpmChange'), 
        accuracy: document.getElementById('accuracy'), 
        accuracyChange: document.getElementById('accuracyChange'),

        // User Input
        textInput: document.querySelector('#input'), 
        nameInput: document.querySelector('.form-group'),

        // Test Words
        content: document.getElementById('content'),
        activeWord: '',

        // Modal
        modal: $('#myModal')

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
        updateTimeLeft: function(x){
            DOMElements.timeLeft.innerHTML = x;
        },

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
            content = content.split('<span>' + lineReturn + '</span>').join('<span>&crarr;</span>')
            // console.log(content)

            DOMElements.content.innerHTML = content;
            
         
        }, 

        formatWord: function(wordObject){
            var activeWord = DOMElements.activeWord;
            
            // Hightlight current word
            activeWord.className = 'activeWord';

            // Format indiviual character
        }, 

        setActiveWord: function(index){
            DOMElements.activeWord = DOMElements.content.children[index];
        },

        deactivateCurrentWord: function(){}, 

        scroll: function(){},

    };

}());