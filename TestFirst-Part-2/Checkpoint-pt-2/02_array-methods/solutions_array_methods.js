/* eslint-disable no-unused-vars */

//~~~~~useMapToUpperCase~~~~~//
const useMapToUpperCase=str=>{
    const strArray=str.split(' ');
    const upperCaseArray=strArray.map(str=>str.toUpperCase());
    return upperCaseArray;
};

//~~~~~useFilter~~~~~//
const useFilter=arr=>{
    const filteredElements=arr.filter(element=>element.includes('@'));
    return filteredElements;
};

//~~~~~sumWithReduce~~~~~//
const sumWithReduce=(arr,start)=>{
    const sumItUp=(total,current)=>{
        return total+current;
    };
   const startValue=start?start:0;
   const total=arr.reduce(sumItUp,startValue);
   return total;
};

//~~~~~filterEvensDoubleAndSum~~~~~//
const filterEvensDoubleAndSum=arr=>{
    //const evenNumbaz=arr.filter(num=>num%2===0);
    //const doubledNumbaz=evenNumbaz.map(num=>num*2);
    //const sumItUp=(total,current)=>{
    //    return total+current;
    //};
    //const total=doubledNumbaz.reduce(sumItUp,0);
    //return total;
    return arr.filter(num=>num%2===0)
    .map(num=>num*2)
    .reduce(((total,current)=>total+current),0);
};