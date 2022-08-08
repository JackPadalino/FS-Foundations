/* eslint-disable no-unused-vars */

class VM{
    constructor(inventory){
        this.inventory=inventory;
    };
    sale(itemID){
        const item=this.inventory[itemID];
        if(item.stock>0){
            item.stock--;
            return `1 ${item.name} - Thank you and come again!`;
        };
    };
    stockTotal(){
        /*
        const stockValues=Object.values(this.inventory);
        const sumItUp=(total,current)=>{
            return total+current.stock;
        };
        const total=stockValues.reduce(sumItUp,0);
        */
        const total=Object.values(this.inventory)
        .reduce((total,current)=>total+current.stock,0);
        return total===0?'Out of Stock':`${total} item(s)`;
    };
};