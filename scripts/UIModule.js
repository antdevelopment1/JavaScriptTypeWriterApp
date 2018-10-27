var UIModule = (function() {

    // =================
    // Private Variables
    // =================

    var DOMElments = {

        // Indicators / Test Control
        timeLeft, // HTML element displaying time left

        // Test Results
        wpm, wpmChange, cpm, cpmChange, accuracy, accuracyChange,

        // User Input
        textInput, nameInput,

        // Test Words
        content, activeWord,

        // Modal
        modal

    };

    // ================
    // Public Variables
    // ================
    return {

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

        // Test Words
        fillContent: function(){}, 

        formatCurrentWord: function(){}, 

        setActiveWord: function(){},

        deactivateCurrentWord: function(){}, 
        
        scroll: function(){},

    };

}());