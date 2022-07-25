/* eslint-disable no-unused-vars, no-throw-literal*/

//~~~~~coding the solution the 'long' way~~~~~//


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
    if(this.stack.length<=1){
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