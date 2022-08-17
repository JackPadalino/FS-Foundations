/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

/*
function getGuessAndUpdate(element){
    const text=element.value;
    element.value='';
    alert(typeof text);
};

let submitGuessButton=document.getElementById('submit-guess-button');

submitGuessButton.addEventListener('click',function(){
    const element=document.getElementById('enter-guess-form');
    getGuessAndUpdate(element);
});
*/


// Game class
class Game{
    constructor(){
        this.playersGuess=null;
        this.pastGuesses=[];
        this.winningNumber=generateWinningNumber();
    };
    difference(){
        return Math.abs(this.playersGuess-this.winningNumber);
    };
    isLower(){
        return this.playersGuess<this.winningNumber;
    };
    playersGuessSubmission(guess){
        if(typeof guess==='number' && guess>=1 && guess<=100){
            this.playersGuess=guess;
            return this.checkGuess(guess);
        }else{
            throw 'That is an invalid guess.';
        };
    };
    checkGuess(guess){
        if(this.pastGuesses.includes(this.playersGuess)){
            return "You have already guessed that number.";
        }else if(guess===this.winningNumber){
            return 'You Win!';
        }else{
            this.pastGuesses.push(guess);
            if(this.pastGuesses.length===5){
                return 'You Lose.';
            }else{
                const diff=this.difference();
                if(diff<10){
                    return "You're burning up!"
                }else if(diff<25){
                    return "You're lukewarm."
                }else if(diff<50){
                    return "You're a bit chilly."
                }else{
                    return "You're ice cold!"
                }; 
            };
        };
    };
    provideHint(){
        const hintArray=[this.winningNumber,generateWinningNumber(),generateWinningNumber()];
        return shuffle(hintArray);
    };
};

// generate winning number
function generateWinningNumber(){
    return Math.floor(Math.random()*100)+1;
};

// shuffle function
function shuffle(array){
    var m=array.length,t,i;
    while(m){
      i= Math.floor(Math.random()*m--);
      t=array[m];
      array[m]=array[i];
      array[i]=t;
    };
    return array;
  };

// new game function
function newGame(){
    return new Game;
};