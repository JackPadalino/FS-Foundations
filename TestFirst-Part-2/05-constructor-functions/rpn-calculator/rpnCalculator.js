/* eslint-disable no-unused-vars, no-throw-literal*/

/*
//~~~~~solution #1~~~~~//
function RPNCalculator(){
    this.stack = [];
};
// the 'push' method
RPNCalculator.prototype.push = function(num){
    this.stack.push(num);
};
// the 'pop' method
RPNCalculator.prototype.pop = function(){
    const poppedNum = this.stack.pop();
    return poppedNum;
};
// the 'plus' method
RPNCalculator.prototype.plus = function(){
    if(this.stack.length<2){
        throw 'rpnCalculatorInstance is empty';
    };
    const poppedNum1 = this.pop();
    const poppedNum2 = this.pop();
    const sum = poppedNum1+poppedNum2;
    this.push(sum);
    return sum;
};
// the 'value' method
RPNCalculator.prototype.value = function(){
    return this.stack[0];
};

// the 'minus' method
RPNCalculator.prototype.minus = function(){
    if(this.stack.length<=1){
        throw 'rpnCalculatorInstance is empty';
    };
    const poppedNum1 = this.pop();
    const poppedNum2 = this.pop();
    const difference = poppedNum2-poppedNum1;
    this.push(difference);
    return difference;
};
// the 'times' method
RPNCalculator.prototype.times = function(){
    if(this.stack.length<=1){
        throw 'rpnCalculatorInstance is empty';
    };
    const poppedNum1 = this.pop();
    const poppedNum2 = this.pop();
    const product = poppedNum1*poppedNum2;
    this.push(product);
    return product;
};
// the 'divide' method
RPNCalculator.prototype.divide = function(){
    if(this.stack.length<=1){
        throw 'rpnCalculatorInstance is empty';
    };
    const poppedNum1 = this.pop();
    const poppedNum2 = this.pop();
    const quotient = poppedNum2/poppedNum1;
    this.push(quotient);
    return quotient;
};
*/

/*
//~~~~~solution #2~~~~~//
function RPNCalculator(){
    this.stack = [];
};
// master computing method
RPNCalculator.prototype.runFunction = function(aFunction){
    if(this.stack.length<2){
        throw 'rpnCalculatorInstance is empty';
    };
    const poppedNum1 = this.stack.pop();
    const poppedNum2 = this.stack.pop();
    const result = aFunction(poppedNum1,poppedNum2)
    this.push(result);
};
// the 'value' method
RPNCalculator.prototype.value = function(){
    return this.stack[0];
};
// the 'push' method
RPNCalculator.prototype.push = function(num){
    this.stack.push(num);
};
// the 'plus' method
RPNCalculator.prototype.plus = function(){
    const aFunction = (num1,num2)=>num1+num2;
    this.runFunction(aFunction);
};
// the 'minus' method
RPNCalculator.prototype.minus = function(){
    const aFunction = (num1,num2)=>num2-num1;
    this.runFunction(aFunction);
};
// the 'times' method
RPNCalculator.prototype.times = function(){
    const aFunction = (num1,num2)=>num1*num2;
    this.runFunction(aFunction);
};
// the 'divide' method
RPNCalculator.prototype.divide = function(){
    const aFunction = (num1,num2)=>num2/num1;
    this.runFunction(aFunction);
};
*/

//~~~~solution #3 w/classes~~~~~//
class RPNCalculator{
    // class constructor function
    constructor(){
        this.stack=[];
    };
    // master computing method
    runFunction(aFunction){
        if(this.stack.length<2){
            throw 'rpnCalculatorInstance is empty';
        };
        const poppedNum1 = this.stack.pop();
        const poppedNum2 = this.stack.pop();
        const result = aFunction(poppedNum1,poppedNum2)
        this.push(result);
    };
    // the 'value' method
    value(){
        return this.stack[0];
    };
    // the 'push' method
    push(num){
        this.stack.push(num);
    };
    // the 'plus' method
    plus(){
        const aFunction = (num1,num2)=>num1+num2;
        this.runFunction(aFunction);
    };
    // the 'minus' method
    minus(){
        const aFunction = (num1,num2)=>num2-num1;
        this.runFunction(aFunction);
    };
    // the 'times' method
    times(){
        const aFunction = (num1,num2)=>num1*num2;
        this.runFunction(aFunction);
    };
    // the 'divide' method
    divide(){
        const aFunction = (num1,num2)=>num2/num1;
        this.runFunction(aFunction);
    };
};