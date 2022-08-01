/* eslint-disable no-unused-vars */

//~~~~~reject~~~~~//
const reject=(arr,func)=>{
    const falsyElements=arr.filter(element=>func(element)===false);
    return falsyElements;
};