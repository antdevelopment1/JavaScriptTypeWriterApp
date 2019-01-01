# Speed Typewriter JavaScript App Bootstrap to CSS Redesign

## What Is This Project About
This speed typewriter app is a an online udemy project I converted from Boostrap to CSS using Flexbox. Below are before and after images. The objective with building this project was to gain a deeper understanding of JavaScript closures, modular code design patterns, and to gain fluency translating code across different technologies.

## Technologies used before
* HTML
* CSS
* Bootstrap
* Vanilla JavaScript
* jQuery

## Technologies used after
* HTML
* CSS - Flexbox
* Vanilla JavaScript
* jQuery

## Speed Typing Test Before Images and Responsive Breakpoints - Bootstrap Layout

### Large breakpoint
<p align='center'>
    <img src='readme/images/beforebig.png'></img>
</p>

### Medium Breakpoint
<p align='center'>
<img src='readme/images/beforemedium.png' width="500" height="700"></img>
</p>

### Small Breakpoint
<p align='center'>
    <img src='readme/images/beforesmall.png' width="425" height="650"></img>
</p>

## Speed Typing Test After Images and Responsive Breakpoints CSS Flexbox Layout

### Large breakpoint
<p align='center'>
    <img src='readme/images/afterlargetop.png'></img>
</p>

<p align='center'>
<img src='readme/images/afterlargebottom.png'></img>
</p>

### Medium Breakpoint
<p align='center'>
<img src='readme/images/aftermedium.png' width="500" height="700"></img>
</p>

<p align='center'>
<img src='readme/images/aftermediumbottom.png' width="500" height="700"></img>
</p>

### Small Breakpoint
<p align='center'>
<img src='readme/images/aftersmall.png' width="450" height="700"></img>
</p>
<p align='center'>
<img src='readme/images/aftermsallbottom.png' width="450" height="700"></img>
</p>

## Code Walkthrough / Featues

### Before Bootstrap Code

```
/*body element*/
body{
/*    font-family: 'Quattrocento Sans', sans-serif;*/
    background: url("images/aurora.jpg") no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
    color: white;
}

.meas_container{
    background-color: rgba(236, 34, 202, 0.5);
}

.row{
    font-size: 30px;
}

.title{
    font-size: 14px;
}

.typingIcon{
    height: 50px;
}

#content{
    height: 120px;
    background-color: rgba(255,255,255,0.2);
    margin: 10px auto;
    font-size: 30px;
    overflow: hidden;
    padding: 0 5px;
    line-height: 40px
}

.change{
    height: 25px;
    font-size: 16px;
}

#input{
    background-color: rgba(239, 37, 188, 0.3);
    width: 100%;
    font-size: 30px;
    padding: 10px;
    color: rgb(1, 226, 182)
}

.keyboard{
    min-height: 200px;
    max-height: 300px;
    background: url("images/keyboard.jpeg") no-repeat center center;
    background-size: contain;
    margin-top: 10px;
}

.restart{
    margin-top: 20px;
    opacity: 0.5
}

.btn-primary{
    background: rgba(236, 34, 202, 0.5)
}

.btn-primary:focus,.btn-primary:active,.btn-primary:hover{
    background: rgba(236, 34, 202, 0.8)
}

.scoreDown, .scoreUp{
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
}

.scoreDown{
    background: mediumvioletred
}

.scoreUp{
    background: greenyellow;
    color: black
}

.modal{
    color: black;
}

.activeWord{
    background-color: greenyellow;
    border-radius: 5px;
}

.correctCharacter{
    color: mediumblue;
}

.wrongCharacter{
    color: mediumvioletred;
}

.result{
    font-size: 20px;
}
```

### After CSS Flexbox Code

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    /* outline: 1px solid red; */
}


/* Landing Section */
body {
       font-family: 'Quattrocento Sans', sans-serif;
        color: rgba(255, 255, 255, .9);
        height: 100%;
        width: 100%;
        background-image:linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.05)), url(./../images/underwater-802092_1280.jpg);
        background-size: cover;
        background-repeat: no-repeat;   
    }

    header {
        /* outline: 2px solid green; */
        width: 100%;
        text-align: center;
        margin-top: 100px;
    }

    p {
        /* outline: 2px solid green; */
        font-size: 50px;
        letter-spacing: 1px;
        margin: 50px 0 25px 0;
    }

    .counter-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        /* outline: 1px solid red; */
    }

    .counters{
        font-size: 30px;
        /* outline: 3px solid green; */
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .meas_container{
        margin-top: 30px;       
        background-color:rgba(255, 255, 255, .3);
        border: 2px solid rgba(255, 255, 255, .5);
        /* outline: 1px solid red; */
        height: 200px;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 3px 3px 3px black;
        border-radius: 50%;
    }
    
    .title{
        font-size: 18px;
        /* outline: 1px solid blue; */
    }
    
    .typingIcon{
        height: 50px;
        /* outline: 2px solid blue; */
    }

    .typingIcon .speed {
         /* outline: 2px solid blue; */
        width:60px;
    }

    .typingIcon .cpm {
        width:30px;
    }

    .typingIcon .accuracy {
        width: 50px;
        height: 100%;
    }

    .typingIcon .stopwatch {
        width: 45px;
        height: 100%;
    }
    
    .test-words {
        height: 360px;
        background-color: rgba(255,255,255,0.2);
        font-size: 30px;
        width: 80%;
        overflow: hidden;
        margin: 70px auto;
        line-height: 40px;
        border-radius: 5px;
        box-shadow: 3px 3px 3px black;
        /* outline: 1px solid red; */
        text-align: center;
    }

    .text-input {
        /* outline: 2px solid red; */
        display: flex;
        justify-content: center;
        border: none;
        color: rgba(255, 255, 255, .9);
    }

    .text {
        /* outline: 15px solid purple; */
        padding: 15px 20px;
        text-align: center;
        border: none;
        box-shadow: 3px 3px 3px black;
    }

    .text::placeholder {
        color: rgba(255, 255, 255, .7);
    }

    .text:focus {
        outline: none;
    }
    
    #input{
        background-color:rgba(0, 0, 0, .1);
        width: 35%;
        font-size: 30px;
        color: #fff;
    }

    
    .restart{
        margin-top: 80px;
        margin-bottom: 40px;
        opacity: 0.8;
        /* outline: 2px solid red; */
        display: flex;
        justify-content: center;
    }
    
    .restart-button{
        background:rgba(0, 0, 0, .1);
        /* outline: 1px solid red; */
        border: 2px solid rgba(255, 255, 255, .4);
        color: white;
        height: 65px;
        width: 15%;
        box-shadow: 3px 3px 3px black;
        font-size: 30px;
        border-radius: 5px;
    }
    
    .restart-button:focus,.restart-button:active,.restart-button:hover{
        background: rgba(0, 0, 0, .1);
        border: 2px solid rgba(255, 255, 255, .5);
    }
    
    .scoreDown, .scoreUp{
        border-radius: 5px;
        padding: 5px;
        font-size: 12px;
    }
    
    .scoreDown{
        background: red;
    }
    
    .scoreUp{
        background: rgba(0, 255, 0, 0.493);
        color: black
    }
    
    .modal{
        color: black;
        /* outline: 15px solid red; */
    }

    .modal-dialog {
        /* outline: 10px solid red; */
    }

    .activeWord {
        background-color: rgba(0, 0, 0, .3);
        border-radius: 2px;
    }

    .correctCharacter {
        color: lime;
    }

    .wrongCharacter {
        color: rgb(235, 36, 36);
    }

    .result {
        font-size: 20px;
    }

    .footer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-top: 100px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, .7);
        font-family: 'Open Sans Condensed', sans-serif;
    }

    footer {
        padding-bottom: 30px;
    }

    footer p {
        font-size: 20px;
        letter-spacing: 4px;
        color: rgba(255, 255, 255, .6);
        /* outline: 1px solid red; */
    }

    .fish1,
    .fish2,
    .fish3 {
        font-size: 25px;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, .9);
    }
    
    .fish1 {
        color: rgba(38, 86, 163, 0.8);
    }

    .fish2 {
        color: rgba(87, 141, 36, 0.8);
    }

    .fish3 {
        color: rgba(196, 96, 30, 0.8);
    }
```

