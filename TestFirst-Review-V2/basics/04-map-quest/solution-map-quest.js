/* eslint-disable no-unused-vars */

const mapQuest=arr=>{
    const dirObj={
        'N':1,
        'S':-1,
        'E':2,
        'W':-2
    };
    const finalArr=[];
    const arrLength=arr.length;
    const [first,last]=[arr[0],arr[arr.length-1]];
    const newArr=arr;
    newArr.splice(0,0,first)
    newArr.splice(-1,0,last,last,last);
    for(let a=1;a<arrLength+1;a++){
        let total=dirObj[newArr[a]]+dirObj[newArr[a-1]];
        if(total===0){
            //pass
        }else{
            let total1=dirObj[newArr[a]]+dirObj[newArr[a+1]];
            let total2=dirObj[newArr[a]]+dirObj[newArr[a+2]];
            let total3=dirObj[newArr[a]]+dirObj[newArr[a+3]];
            if(total1===0||total2===0||total3===0){
                //pass
            }else{
                finalArr.push(arr[a]);
            };
        };
    };
    return finalArr;
};