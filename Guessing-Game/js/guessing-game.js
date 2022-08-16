/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

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