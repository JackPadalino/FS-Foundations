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
    const vowels='aeiouAEIOU';
    let totalVowels=0;
    if(str.length===0) return 0;
    if(vowels.includes(str[0])) totalVowels++;
    return totalVowels+countTheVowels(str.slice(1));
};

function recSmallestInt(arr){
    // array needs to shrink after each call
    if(arr.length===1)return arr[0];
    if(arr[0]>arr[arr.length-1]) return recSmallestInt(arr.slice(1));
    else return recSmallestInt(arr.slice(0,arr.length-1));
};

function fib(){

};

function stringify(){

};

function search(){

};

function recursiveMap(){

};