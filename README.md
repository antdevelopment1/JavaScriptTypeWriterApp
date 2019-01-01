# Speed Typewriter JavaScript App

## What Is This Project About
This speed typewriter app is a frontend redesign of an online course. Below are before and after images. This frontend application was converted from Bootstrap and redesigned using CSS Flexbox. 

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

## Challenges and Coding Patterns Used In This Project

### IIFE, Closures, Public and Private Variables
<p>I found this coding pattern to be very interesting conceptually. I felt it was very useful to be able to access variables and methods after the surrounding function has been invoked by returning and object with invokable methods. It took some practice to visualize what was happening but with practice I quickly appreciated and became fond of what closures are capable of.</p>

```
var wordsModule = (function(){
    var words = ['hello'];

    return{
        getWords(textNumber){
            return words[textNumber];
        }
    }
})();

```