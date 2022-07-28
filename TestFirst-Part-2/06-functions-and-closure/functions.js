/* eslint-disable no-unused-vars */

//~~~~~concatString function~~~~~//
function concatString(){
    return Array.from(arguments).join('');
};

//~~~~~yourFunctionRunner function~~~~~//
function yourFunctionRunner(){
    let finalString = '';
    for(let func of arguments){
        const str = func();
        finalString += str;
    };
    return finalString;
   /*
    // solving use the map() function
    const funcArgs = Array.from(arguments);
    const funcStringsArray = funcArgs.map(func => func());
    const finalString = funcStringsArray.join('');
    return finalString;
    */
};

//~~~~~makeAdder function~~~~~//
function makeAdder(num1){
    return function(num2){
        return num1+num2;
    };
};

//~~~~~once function~~~~~??
function once(func){
    let called = false;
    return function(){
        if(called===false){
            called=true;
            return func();
        }else{
            return 'the function has already been called...';
        };
    };
};

//~~~~~createObjectWithClosures~~~~~//
function createObjectWithClosures(){
    let value = 0;
    return {
        oneIncrementer:function(){
            value += 1;
        },
        tensIncrementer:function(){
            value += 10;
        },
        getValue:function(){
            return value;
        },
        setValue:function(val){
            if(val){
                value = val;
            };
            return value;
        }
    };
};

//~~~~~dontSpillTheBeans function~~~~~//
function dontSpillTheBeans(phrase){
    return {
        getSecret:function(){
            return phrase;
        },
        setSecret:function(newPhrase){
            phrase = newPhrase;
        }
    };
};