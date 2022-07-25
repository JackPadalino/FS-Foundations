/* eslint-disable no-unused-vars */

const name = 'Cody';
const loud = 'loud';
const dog = {
    name,
    bark(){
        return 'ruff ruff!'
    },
    loudBark(){
        return this.bark().toUpperCase();
    }
};