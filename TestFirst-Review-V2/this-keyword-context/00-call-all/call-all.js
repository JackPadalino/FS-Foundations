/* eslint-disable no-unused-vars */

const callAll=(obj,funcArr)=>{
    return funcArr.map(func=>func.call(obj));
};