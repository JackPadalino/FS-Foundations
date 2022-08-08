/* eslint-disable no-unused-vars, no-prototype-builtins */

const alternate=func=>{
    let callNum=1;
    return function(){
        callNum++;
        if(callNum%2===0){
            return func();
        };
    };
};

const twice=func=>{
    let callNum=0;
    return function(){
        if(callNum<2){
            callNum++;
            return func();
        }else{
            return 0;
        };
    };
};