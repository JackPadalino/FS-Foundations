/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.

const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan{
  constructor(secretWord){
    this.secretWord=secretWord.split('');
    this.remainingGuesses=6;
    this.lettersGuessed=[];
    this.gameState='playing';
    // added properties
    this.secretWordSet = [...new Set(this.secretWord)];
    this.correctGuesses=[];
    this.currentBoardIndex=this.remainingGuesses;
    this.secretWordPuzzle=this.secretWord.map(letter=>letter===' '?' ':'#');
  };
  submitGuess(letter){
    if(this.gameState==='playing'){
      letter=letter.toLowerCase();
      if(this.lettersGuessed.includes(letter)){
        return 'You already guessed that letter!';
      }else{
        if(this.secretWord.includes(letter)){
          this.correctGuesses.push(letter);
          this.correctGuesses.sort();
          this.lettersGuessed.push(letter);
          return 'Correct!'
        }else{
          this.remainingGuesses--;
          this.currentBoardIndex=this.remainingGuesses;
          this.lettersGuessed.push(letter);
          return 'Inorrect!'
        }
      };
    };
  };
  computeGameState(){
    if(this.remainingGuesses===0){
      this.gameState='lost';
    }else{
      if(this.correctGuesses.length===this.secretWordSet.length){
        this.gameState='won';
      }else{
        this.gameState='playing';
      };
    };
  };
  getSecretWordPuzzle(){
    return this.secretWord.map(letter=>{
      if(letter===' '){
        return ' ';
      }else{
        if(this.correctGuesses.includes(letter)){
          return letter;
        }else{
          return '#';
        };
      };
    })
    .join('');
  };
  getGameStateMessage(){
    if(this.gameState==='lost'){
      return `Game Over, the word was "${this.secretWord.join('')}":\n${ASCIIART[this.remainingGuesses]}`
    }else if(this.gameState==='playing'){
      return `There is a total of ${this.remainingGuesses} guesses remaining:\n${ASCIIART[this.currentBoardIndex]}`
    }else{
      return 'Winner Winner Chicken Dinner, you won!';
    };
  };
  simulateVanishingMan(){
    return null;
  };

//closing bracket for VanishingMan class
};
