/* eslint-disable no-unused-vars */

//~~~~~thrice~~~~~//
const thrice=(func)=>{
    let called=0;
    return function(){
        if(called<3){
            called++;
            return func();
        };
    };
};