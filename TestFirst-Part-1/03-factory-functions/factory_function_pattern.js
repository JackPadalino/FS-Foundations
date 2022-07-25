// Here is an example of the 'factory function design pattern'. It is a design pattern for instsantiating new objects
// using factory functions - functions that create and return new objects

// First we create a prototype object that will hold all the methods that will be passed to each object
// Once, instantiated, each new object will have access to these methods
const phoneFunctions = {
    getPower(){
        return this.power;
    },
    charge(){
        this.power+=5;
        return null;
    },
    usePower(){
        this.power-=5;
        return null;
    }
};

// Next, we write a 'factory function' which is a function that is going to create and return an instance of an object.
const phoneFactory=(brand,model)=>{
    // Here we pass in the prototype object as an argument to the create function
    // this will give each new object access to the prototype methods
    const newPhone = Object.create(phoneFunctions);
    // now we give each new object their individual attributes. These attributes will not be in the object's
    // prototype chain
    newPhone.brand = brand;
    newPhone.model = model;
    newPhone.power = 100;
    return newPhone;
};

// Finally, we call the factory function to instantiate a few instances of new phone objects
const phone1 = phoneFactory('iPhone','SE');
const phone2 = phoneFactory('Samsung','Galaxy');

// Now that a few objects have been created, they are now able to call the methods within the prototype
// that was passed into them

phone1.getPower(); //100
phone1.usePower(); //95
phone1.charge(); //100

phone2.getPower(); //100
phone2.usePower(); //95
phone2.charge(); //100