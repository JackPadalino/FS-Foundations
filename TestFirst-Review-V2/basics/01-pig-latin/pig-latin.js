/* eslint-disable no-unused-vars */

const vowelsArr=['a','e','o','i','u'];
const prefiexArr=['sch','qu','squ'];

//~~~~~pigify~~~~~//
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