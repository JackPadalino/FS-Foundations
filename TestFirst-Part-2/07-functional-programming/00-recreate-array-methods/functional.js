/* eslint-disable no-unused-vars */

//~~~~~the forEach function~~~~~//
const forEach=(arr)=>{
    return arr.forEach(item=>console.log(item));
};

//~~~~~the map function~~~~~//
const map=(arr,func)=>{
    const newArray=[];
    /*
    for(let item of arr){
        const newItem=func(item);
        newArray.push(newItem);
    };
    */
   arr.forEach(item=>newArray.push(func(item)));
    return newArray;
};

//~~~~~the filter function~~~~~//
const filter=(arr,func)=>{
    const newArray=[];
    arr.forEach(item=>{
        if(func(item)){
            newArray.push(item);
        };
    });
    return newArray;
};

//~~~~~the includes function~~~~~//
const includes=(obj,element)=>{
    let found=false;
    /*
    for(i in obj){
        if(obj[i]===element){
            found=true;
        };
    };
    */
   for(let i in obj){
      if(obj.hasOwnProperty(i)){
        if (obj[i]===element){
          found=true;
        };
      };
    };
    return found;
};

//~~~~~the function countWords~~~~~//
const countWords=(start,aString)=>start+aString.split(' ').length;

//~~~~~the function reduce~~~~~//
const reduce=(obj,startValue,func)=>{
    let value=startValue;
    obj.forEach(item=>{
        value=func(value,item)
    });
    return value;
};

//~~~~~the sum function~~~~~//
const sum=(arr)=>{
    const add=(accumulator,index)=>accumulator+index;
    const total=reduce(arr,0,add);
    return total;
};