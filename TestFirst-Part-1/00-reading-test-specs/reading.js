/* eslint-disable no-unused-vars */
function hello(name) {
  if (typeof name === 'undefined') {
    return 'Hello!';
  } else {
    return `Hello, ${name}!`;
  }
};

function add(number, num) {
  return number + num;
};

// adding my own functions, because why not?!

// function to raise a number to a power
function raisePower(num1,num2){
  return num1**num2
};

// function to concatenate two strings
function conCatz(name,hobby){
  return `${name}'s favorite hobby is ${hobby}!`;
};

// function to remove vowels from a string
function removeVowels(word){
  const vowels = ['A','a','E','e','I','i','O','o','U','u','Y','y'];
  let newString = '';
  for(let i=0;i<word.length;i++){
    if(vowels.includes(word[i])){
      continue;
    }else{
      newString+=word[i];
    };
  };
  return newString;
};

