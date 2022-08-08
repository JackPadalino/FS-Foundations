/* eslint-disable no-unused-vars, no-prototype-builtins */
const aQuarter=func=>{
    let callNum=0;
    return function(...args){
        callNum++;
        if(callNum%4===0){
            return func(...args);
        }else{
            return "something went wrong :/";
        };
    };
};