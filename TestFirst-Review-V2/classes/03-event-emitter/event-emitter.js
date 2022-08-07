/* eslint-disable no-unused-vars */

class MyEventEmitter{
    constructor(){
        this.events={};
    };
    addListener(event,func){
        if(event in this.events){
            this.events[event].push(func);
        }else{
            this.events[event]=[func];
        };
    };
    emit(event,...extraArgs){
        this.events[event].forEach(func=>func(...extraArgs));
    };
};