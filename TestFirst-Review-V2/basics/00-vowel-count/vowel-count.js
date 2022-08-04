/* eslint-disable no-unused-vars */

//~~~~~vowelsCount~~~~~//
/*
const vowelsCount=(str)=>{
    const vowelsArr=['a','e','i','o','u'];
    const vowelsObj={
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0,
    };
    for(let i of str){
        i=i.toLowerCase();
        if(vowelsArr.includes(i)){
            vowelsObj[i]++;
        };
    };
    const sumItUp=(total,current)=>{
        return total+current;
    };
    const total=Object.values(vowelsObj).reduce(sumItUp,0);
    vowelsObj.total=total;
    return vowelsObj;
};
*/

// solution using reduce
const vowelsCount=(str)=>{
    const vowels='aeiou';
    str = str.toLowerCase();
    // callback function to count the frequency of vowels in the string and increment the
    // object
    const countEm=(obj, current)=>{
        if(vowels.includes(current)){
            obj[current]++;
            obj['total']++;
        };
        return obj;
    };
    return str.split('').reduce(countEm,{a:0,e:0,i:0,o:0,u:0,total:0});
};
