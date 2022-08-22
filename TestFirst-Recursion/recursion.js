// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */

factorialIterative=n=>{
    let result=1;
    for(let i=n;i>0;i--){
        result=result*i;
    };
    return result;
};

function factorial(n){
    if(n<=1) return 1;
    else return n*factorial(n-1);
};

function sumTheDigits(arr){
    if(arr.length===0) return 0;
    else return arr[0]+sumTheDigits(arr.slice(1));
};

function countTheVowels(str){
    let totalVowels=0;
    const vowels='aeiouAEIOU';
    if(str.length===0)return 0;
    if(vowels.includes(str[0]))totalVowels++;
    return totalVowels+countTheVowels(str.slice(1));
};

function recSmallestInt(arr){
    if(arr.length===1) return arr[0];
    if(arr[0]>arr[arr.length-1]) return recSmallestInt(arr.slice(1));
    else return recSmallestInt(arr.slice(0,arr.length-1));
};

function fib(num){
    if(num<2) return 1;
    else return fib(num-2)+fib(num-1);
};

const type = val => {
    return Object.prototype.toString.call(val).slice(8, -1);
  };
  
function stringify(obj) {
if (type(obj) === 'String') {
    return `"${obj}"`;
}
if (type(obj) === 'Array') {
    const result = obj.map(o => stringify(o));
    return `[${result.join(',')}]`;
}
if (type(obj) === 'Object') {
    let result = [];
    Object.keys(obj).forEach(key => {
    let val = stringify(obj[key]);
    result.push(`"${key}":${val}`);
    });
    return `{${result.join(',')}}`;
}

return obj + '';
};

function search(){

};

function recursiveMap(){

};