/* eslint-disable no-unused-vars */

const sometimes=func=>{
    let called = 1;
    return function() {
        if (called <= 3) {
            called++;
            return func(...arguments);
        }else{
            if(called%2===0){
                called++;
                return 'I do not know!';
            }else{
                called++;
                return func(...arguments);
            };
        };  
    };
};