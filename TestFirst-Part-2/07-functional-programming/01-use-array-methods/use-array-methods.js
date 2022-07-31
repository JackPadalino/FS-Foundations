/* eslint-disable no-unused-vars */

//~~~~~indexAndValue~~~~~//
const indexAndValue=(arr)=>{
    /*
    //Using an imperative approach
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        const obj={
            index:i,
            value:arr[i]
        };
        newArr.push(obj);
    };
    return newArr;
    */
    const newArr=arr.map(element=>({index:arr.indexOf(element),value:element}));
    return newArr;
};

//~~~~~swapCase~~~~~//
const capitalize=aString=>aString.toUpperCase();
const swapCase=aString=>{
    const stringArray=aString.split(' ');
    const capsStringArray=stringArray.map((str,index)=>index%2===0 ? capitalize(str) : str);
    /*
        if(index%2===0){
            return capitalize(str);
        }else{
            return str;
        };
    */
    const finalString=capsStringArray.join(' ');
    return finalString;
};

//~~~~~extensionSearch~~~~~//
const extensionSearch=(ext,arr)=>{
    const files=arr.filter(file=>file.includes(ext));
    return files;
};

//~~~~~getPopulation~~~~~//
const getPopulation=(arr1,arr2)=>{
    const foundCountries=arr1.filter(country=>arr2.includes(country.name));
    const adder=(totalPopulation,currentCountry)=>{
        return totalPopulation+currentCountry.population;
    };
    const population=foundCountries.reduce(adder,0);
    return population>0 ? population:2117902300;
};

//~~~~~powerLevelAverage~~~~~//
/*
// solving keyifyArrayOfObjects without reduce //
const keyifyArrayOfObjects=(key,arr)=>{
    const keyifiedSupes={};
    for(let obj of arr){
        keyifiedSupes[obj[key]]=obj;
    };
    return keyifiedSupes;
};
*/
const keyifyArrayOfObjects=(key,arr)=>{
    const keyify=(keyifiedSupes,currentSupe)=>{
        keyifiedSupes[currentSupe[key]]=currentSupe;
        return keyifiedSupes;
    };
    const keyifiedSupes=arr.reduce(keyify,{});
    return keyifiedSupes;
};