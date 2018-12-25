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

    var userValue;
    var returnCharClass = function(currentCharacter, index){
        return (index < userValue.length)? (currentCharacter == userValue[index] ? 'correctCharacter': 'wrongCharacter') : '0';
    };

    // ================
    // Public Variables
    // ================
    return {

        // Get DOM Elements
        getDOMElements: function(){
            return {
                textInput: DOMElements.textInput  
            };
        },

        // Indicators / Test Control
        updateTimeLeft: function(x){
            DOMElements.timeLeft.innerHTML = x;
        },

        // Test Results
        updateResults: function(){},

        fillModal: function(){}, 

        showMadal: function(){},

        // User Input
        inputFocus: function(){
            DOMElements.textInput.focus();
        }, 

        isNameEmpty: function(){}, 

        flagNameInput: function(){},

        spacePressed: function(event){
            return event.data == " ";
        }, 

        enterPressed: function(lineReturn){
            return this.getTypedWord().includes(lineReturn + ' ');
        }, 

        emptyInput: function(){
            DOMElements.textInput.value = "";
        },

        getTypedWord: function(){
            console.log(DOMElements.textInput.value)
            return DOMElements.textInput.value;
        },

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
            
            // Highlight current word
            activeWord.className = 'activeWord';
            
            // Format individual characters
            var correctValue = wordObject.value.correct;
            userValue = wordObject.value.user;
            
            // Correct value 'word1 '
            // User value 'wwrd'
            var classes = Array.prototype.map.call(correctValue, returnCharClass);
            
            // Get active word
            var activeWord = DOMElements.activeWord;
            
            // HTML collection
            var characters = activeWord.children;
            
            // Add classes to children
            for(var i = 0; i < characters.length; i ++){
                characters[i].removeAttribute('class');
                characters[i].className = classes[i];
            }
              
        }, 
        
        setActiveWord: function(index){
            DOMElements.activeWord = DOMElements.content.children[index];
        }, 
        

        deactivateCurrentWord: function(){
            DOMElements.activeWord.removeAttribute('class');
        }, 

        scroll: function(){
            var activeWord = DOMElements.activeWord;
            var top1 = activeWord.offsetTop;
            var top2 = DOMElements.content.offsetTop;
            var diff = top1 - top2;
            // Scroll the content of the content box
            DOMElements.content.scrollTop = diff - 40;
        },

    };

}());

