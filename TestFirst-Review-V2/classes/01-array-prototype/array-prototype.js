/* eslint-disable no-unused-vars */

//~~~~~Array.prototype.maap~~~~~//
Array.prototype.maap=function(func){
    const newArr=[];
    this.forEach(item=>newArr.push(func(item)));
    return newArr;
};

//~~~~~Array.prototype.fiilter~~~~~//
Array.prototype.fiilter=function(func){
    const newArr=[];
    this.forEach(item=>{
        if(func(item)){
            newArr.push(item);
        };
    });
    return newArr;
};

//~~~~~Array.prototype.reeduce~~~~~//
Array.prototype.reeduce=function(func,startValue){
    let value=startValue;
    this.forEach(item=>{
        value=func(value,item)
    });
    return value;
};