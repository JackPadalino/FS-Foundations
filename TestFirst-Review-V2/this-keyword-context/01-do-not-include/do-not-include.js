/* eslint-disable no-unused-vars, no-extend-native */

Array.prototype.doNotInclude=function(args){
    if(!Array.isArray(args)) args=[args];
    return this.filter((value,index)=>{
        if(!args.includes(index)){
            return value;
        };
    });
};