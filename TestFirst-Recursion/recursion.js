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

// need to redo countTheVowels!

// need to redo recSmallestInt!

function fib(num){
    if(num<2) return 1;
    else return fib(num-2)+fib(num-1);
};

function stringify(){

};

function search(){

};

function recursiveMap(){

};