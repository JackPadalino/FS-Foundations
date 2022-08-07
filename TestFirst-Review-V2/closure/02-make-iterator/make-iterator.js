/* eslint-disable no-unused-vars */

const makeIterator=arr=>{
    let index=0;
    const obj={
        getNext(){
            //index++;
            return {
                value:arr[index++],
                done:index>arr.length
            };
        },
        getIndex(){
            return index;
        }
    };
    return obj;
};