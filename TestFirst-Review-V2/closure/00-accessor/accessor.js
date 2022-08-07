/* eslint-disable no-unused-vars */

const accessor=obj=>{
    //const newFunc=(key,newValue)=>newValue?obj[key]=newValue:obj[key];
    //return newFunc;
    return (key,newValue)=>newValue ? obj[key]=newValue : obj[key];
};