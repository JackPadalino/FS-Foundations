/* eslint-disable no-unused-vars */

const vowelsArr=['a','e','o','i','u'];
const prefiexArr=['sch','qu','squ'];

//~~~~~pigify~~~~~//
/*
// ThIs CoDe FaIlS tHe LaSt ThReE tEsTs //
const pigify=str=>{
    const strArr=str.split(' ');
    const pigifiedWordsArr=[];
    for(let word of strArr){
        let counter=0;
        for(let letter of word){
            if(vowelsArr.includes(letter)){
                break;
            }else{
                counter++;
            };
        };
        const slice1=word.slice(0,counter);
        const slice2=word.slice(counter,word.length);
        const pigifiedWord=`${slice2}${slice1}ay`
        pigifiedWordsArr.push(pigifiedWord);
    };
    const finalStr=pigifiedWordsArr.join(' ');
    return finalStr;
};
*/

const pigify = phrase => {
    const phraseArr = phrase.split(' ');
    const vowel = 'aeiou';
  
    return phraseArr
      .reduce((accum, word) => {
        let indexOfVowel = 0;
        for (let i = 0; i < word.length; i++) {
          const letter = word[i];
          if (vowel.includes(letter)) {
            // if the vowel isn't u OR if the vowel is u and the preceeding character isn't 'q'
            if (letter !== 'u' || (letter === 'u' && word[i - 1] !== 'q')) {
              indexOfVowel = i;
              break;
            }
          }
        }
        const startNoConsonants = word.slice(indexOfVowel);
        const consonantsForEnd = word.slice(0, indexOfVowel);
  
        accum = [...accum, `${startNoConsonants}${consonantsForEnd}ay`];
        return accum;
      }, [])
      .join(' ');
  };