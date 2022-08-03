/* eslint-disable no-unused-vars */

// Laptop class
class Laptop{
    constructor(year,hd){
        this.year=year;
        this.hd=hd;
    };
    checkSpecs(){
        return `Year: ${this.year}, HD: ${this.hd}`;
    };
};

// Macbook class
class Macbook extends Laptop{
    constructor(year,hd,color){
        super(year,hd);
        this.color=color;
    };
};