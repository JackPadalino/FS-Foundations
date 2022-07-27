/* eslint-disable no-unused-vars, no-throw-literal*/
 
//~~~~~Pokemon constructor function~~~~~//
function Pokemon(name,health,attackBonus){
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
};

//~~~~~Adding new functions to the Pokemon prototype~~~~~//
Pokemon.prototype.biteAttack = function(){
    return this.attackBonus+2;
};

Pokemon.prototype.isDefeated = function(){
    if(this.health >= 1){
        return false;
    }else{
        return true
    };
};

//~~~~~Simulate battle function~~~~~//
const simulateBattle=(poke1,poke2,attacksFirst)=>{
    let firstAttacker;
    let secondAttacker
    if(attacksFirst==poke1.name){
        firstAttacker = poke1;
        secondAttacker = poke2;
    }else{
        firstAttacker = poke2;
        secondAttacker = poke1;
    };
    while(firstAttacker.isDefeated()==false && secondAttacker.isDefeated()==false){
        secondAttacker.health -= firstAttacker.biteAttack();
        firstAttacker.health -= secondAttacker.biteAttack();
    };
    if(firstAttacker.isDefeated()){
        return `${secondAttacker.name} Wins!`
    }else{
        return `${firstAttacker.name} Wins!`
    };
};