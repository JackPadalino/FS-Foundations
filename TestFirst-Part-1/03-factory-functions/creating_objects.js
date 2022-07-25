// An example of creating objects with attributes, methods, and using the "this" keyword

// here we are creating a 'prototype' object - a series of methods that each phone object will have access to
const phoneFunctions = {
  getPowerLevel() {
    return `Battery at ${this.power_level}%`;
  },
  turnOn() {
    this.power = 'On';
    return 'Power on!';
  },
  turnOff() {
    this.power = 'Off';
    return 'Power off!';
  },
  usePower() {
    this.power_level--;
    return null;
  },
  charge() {
    this.power_level++;
    return null;
  },
};

// now we create a phone object that will have a single attribute 'power_level'
// we also pass in the phoneFunctions object we just created so that the phone object will have
// access to those methods:
const phone = Object.create(phoneFunctions);

// here we give the newly created phone object a single attribute 'power_level'
phone.power_level = 100;

// now the phone object can call the functions within its prototype object:
phone.usePower();
phone.usePower();
phone.getPowerLevel();
phone.charge();
phone.charge();