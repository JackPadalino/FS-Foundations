/* eslint-disable no-unused-vars, no-prototype-builtins */

function keyAdder(){
    /*
    const values=Object.values(this);
    const numbers=values.filter(item=>{
        if(typeof item==='number'){
            return item;
        };
    })
    const sumItUp=(total,current)=>{
        return total+current;
    };
    const total=numbers.reduce(sumItUp,0);
    return total;
    */
    return Object.values(this)
    .filter(item=>{
        if(typeof item==='number'){
            return item;
        };
    })
    .reduce((total,current)=>total+current,0);
};