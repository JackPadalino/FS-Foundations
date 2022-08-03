/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
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