/* eslint-disable no-unused-vars, no-prototype-builtins */

const soup=(phrase,characterBank)=>{
    // create two objects to count the letters in each string
    const phraseObj = {};
    const characterBankObj = {};
    for(let char of phrase){
        if(char in phraseObj){
            phraseObj[char]++;
        }else{
            phraseObj[char]=1;
        };
    };
    for(let char of characterBank){
        if(char in characterBankObj){
            characterBankObj[char]++;
        }else{
            characterBankObj[char]=1;
        };
    };
    // compare the frequency of each key in the counter objects
    for(let i in phraseObj){
      if(i in characterBankObj){
          if(phraseObj[i]>characterBankObj[i]){
            return false;
          };
      }else{
          return false;
      };
    };
    return true;
};