/* eslint-disable no-unused-vars */

//~~~~~presses~~~~~//
const presses=str=>{
    const keypadValues={
        1:['a','d','g','j','m','p','t','w',' ','1'],
        2:['b','e','h','k','n','q','u','x','0'],
        3:['c','f','i','l','o','r','v','y'],
        4:['s','z','2','3','4','5','6','8'],
        5:['7','9']
    };
    const getCharValue=char=>{
        for(const [key,val] of Object.entries(keypadValues)){
                if(val.includes(char)){
                    return Number(key);
                };
            };
    };
    const sumItUp=(total,currentNum)=>{
        return total+currentNum;
        };
    /*
    const charsArr=str.split('').map(char=>char.toLowerCase());
    
    const valuesArr=charsArr.map(char=>getCharValue(char));
    
    const total=valuesArr.reduce(sumItUp,0);
    return total;
    */
   return str.split('')
   .map(char=>char.toLowerCase())
   .map(char=>getCharValue(char))
   .reduce(sumItUp,0);
};