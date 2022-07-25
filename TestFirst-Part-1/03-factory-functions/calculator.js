/* eslint-disable no-unused-vars */

//~~~~~code for createCalculator factory function~~~~~//

createCalculator = () => {
    return{
        total:0,
        add(num){
            this.total+=num;
            return null;
        },
        subtract(num){
            this.total-=num;
            return null;
        },
        clear(){
            this.total = 0;
            return null;
        },
        value(){
            return this.total
        },
    };
};

/*
// adding the square method using a for loop:
const addSquareMethod = (instances) => {
    for(let i=0;i<instances.length;i++){
        instances[i].square=()=>{
            return instances[i].total**2;
        };
    };
    return instances;
};
*/

// adding the square method using the map function:
const addSquareMethod = instances => {
    return instances.map(calc => {
      calc.square = function () {
        return this.total**2;
      };
      return calc;
    });
  };

//~~~~~code for createHumanCalculator factory function~~~~~//

const humanCalculatorMethods = {
    add(num){
        this.total+=num;
        return null;
    },
    subtract(num){
        this.total-=num;
        return null;
    },
    value(){
        return this.total;
    },
    clear(){
        this.total=-10;
        return null;
    }
};

createHumanCalculator=()=>{
    const humanCalculator = Object.create(humanCalculatorMethods);
    humanCalculator.total = -10;
    return humanCalculator;
};