/* eslint-disable no-unused-vars */

//~~~~~solution 1 using splice and string literals~~~~~//
const rotater=str=>{
    let forward=false;
    return function(num){
        if(num===str.length){
            forward=!forward;
        };
        if(!forward){
            return `${str.slice(num,str.length)}${str.slice(0,num)}`
        };
        if(forward){
            return `${str.slice(str.length-num,str.length)}${str.slice(0,str.length-num)}`
        };  
    };
};

/*
//~~~~~solution 2 using loops and array methods~~~~~//
const rotater=str=>{
    let forward=false;
    return function(num){
        if(num===str.length){
            forward=!forward;
        };
        const strArr=str.split('');
        if(!forward){
            for(let i=0;i<num;i++){
                const item=strArr.shift();
                strArr.push(item);
            };
        };
        if(forward){
            for(let i=0;i<num;i++){
                const item=strArr.pop();
                strArr.unshift(item);
            };
        };
        const finalStr=strArr.join('');
        return finalStr; 
    };
};
*/