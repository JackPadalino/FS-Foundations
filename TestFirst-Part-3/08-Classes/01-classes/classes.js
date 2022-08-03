/* eslint-disable no-unused-vars */

//~~~~~Notes~~~~~//
// When we use the 'super' function when creating subclasses,
// we are passing those attributes in the super function along to the 
// parent methods. Any attributes outside the super method are unique to 
// the child object.

// Mammal class
class Mammal{
    constructor(name){
        this.name=name;
        this.offspring=[];
    };
    sayHello(){
        return `My name is ${this.name}, I'm a ${this.constructor.name}`;
    };
    haveBaby(){
        const bb=new Mammal(`Baby ${this.name}`);
        this.offspring.push(bb);
        return bb;
    };
};

// Cat class
class Cat extends Mammal{
    constructor(name,color){
        super(name);
        this.color=color;
    };
    meow(){
        return 'meow';
    };
    haveBaby(color){
        const bb=new Cat(`Baby ${this.name}`,color);
        this.offspring.push(bb);
        return bb;
    };
};

// Dog class
class Dog extends Mammal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    };
    bark(){
        return 'RUFF RUFF';
    };
    haveBaby(breed){
        const bb=new Dog(`Baby ${this.name}`,breed);
        this.offspring.push(bb);
        return bb;
    };
};