/* eslint-disable no-unused-vars, no-prototype-builtins */

const reduceRight=(arr,scaffold,func)=>{
    let index=arr.length-1;
    for(let i=index;i>-1;i--){
        scaffold=func(scaffold,arr[i]);
    };
    return scaffold;
};