/* eslint-disable no-unused-vars */

const multiplicationTable=(rows,columns)=>{
    let table = [];
    for(let a=0;a<rows;a++){
        let newRow = [];
        let newElement = a+1
        for(let b=0;b<columns;b++){
            newRow.push(newElement);
            newElement+=a+1;
        };
        table.push(newRow);
    };
    return table;
};