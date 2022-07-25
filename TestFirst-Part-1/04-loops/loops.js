/* eslint-disable no-unused-vars */

//~~~~~repeat function~~~~~//
const repeat=(str,num)=>{
    let newStr='';
    for(let i=0;i<num;i++){
        newStr+=str;
    }
    return newStr;
};

// sum function
const sum=(arr)=>{
    let sum=0;
    for(let i in arr){
        sum+=arr[i];
    };
    return sum;
};

//~~~~~join function~~~~~//
const join=(arr,sep)=>{
    let newStr='';
    for(let i=0;i<arr.length;i++){
        newStr+=arr[i];
        if(sep&&i<arr.length-1){
            newStr+=sep;
        };
    };
    return newStr;
};

//~~~~~gridGenerator function~~~~~//

// final gridGenerator code:
const gridGenerator=(num)=>{
    let grid='';
    if(num>0){
        for(let a=0;a<num;a++){
            for(let b=0;b<num;b++){
                if((a+b)%2==0){
                    grid+='#';
                }else{
                    grid+=' ';
                };
            };
            if(a<num){
                grid+='\n';
            };
        };
    };
    return grid;
};

/*
// first attempt at gridGenerator - only solves for grids with odd nums:
const gridGenerator=(num)=>{
    let grid='';
    let counter=1;
    if(num>0){
        for(let a=0;a<num;a++){
            for(let b=0;b<num;b++){
                if(counter%2!=0){
                    grid+='#';
                }else{
                    grid+=' ';
                };
                counter+=1;
            };
            if(a<num){
                grid+='\n';
            };
        };
    };
    return grid;
};
*/

//~~~~~paramify function~~~~~//

// final paramify code - using the join function (line 22):
const paramify=(obj)=>{
    let objArr=[];
    for(let key in obj) {
      if(obj.hasOwnProperty(key)){
          objArr.push(`${key}=${obj[key]}`);
      };
    };
    objArr.sort();
    let finalObjStr=join(objArr,'&');
    return finalObjStr;
};

/*
// solving 'paramify' function without using the 'join' function from line 22:
const paramify=(obj)=>{
    let finalObjStr='';
    let objArr=[];
    for(let key in obj) {
      if(obj.hasOwnProperty(key)){
          objArr.push(`${key}=${obj[key]}`);
      };
    };
    objArr.sort();
    for(let i=0;i<objArr.length;i++){
        finalObjStr+=objArr[i];
        if(objArr.length>1 && i<objArr.length-1){
            finalObjStr+='&';
        }
    };
    return finalObjStr;
};
*/

//~~~~~paramifyObjectKeys function~~~~~//

// solving 'paramifyObjectKeys' function wit 'map' and 'join' (line 22) functions:
const paramifyObjectKeys=(obj)=>{
    const objArr = Object.keys(obj).map(key=>`${key}=${obj[key]}`);
    objArr.sort();
    let finalObjStr = join(objArr,'&');
    return finalObjStr;
};

/*
// solving 'paramifyObjectKeys' function without 'map' function:
const paramifyObjectKeys=(obj)=>{
    let finalObjStr = '';
    const objArr = [];
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    for(let i=0;i<objKeys.length;i++){
        objArr.push(`${objKeys[i]}=${objValues[i]}`)
    };
    objArr.sort();
    for(let i in objArr){
        finalObjStr+=objArr[i];
        if(objKeys.length>1 && i<objKeys.length-1){
            finalObjStr+='&';
        };
    };
    return finalObjStr;
};
*/

//~~~~~sort function~~~~~//

// solving 'sort' function with a selection sort algorithm:
const sort=arr=>{
    let n=arr.length;
    for(let a=0;a<n;a++){
        for(let b=a+1;b<n;b++){
            if(arr[a]>arr[b]){
                let temp=arr[a];
                arr[a]=arr[b];
                arr[b]=temp;
            };
        };
    };
    return arr;
};