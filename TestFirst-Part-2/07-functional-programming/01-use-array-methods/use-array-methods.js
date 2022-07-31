/* eslint-disable no-unused-vars */

//~~~~~indexAndValue~~~~~//
const indexAndValue=(arr)=>{
    /*
    //Using an imperative approach
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        const obj={
            index:i,
            value:arr[i]
        };
        newArr.push(obj);
    };
    return newArr;
    */
    const newArr=arr.map(element=>({index:arr.indexOf(element),value:element}));
    return newArr;
};

//~~~~~swapCase~~~~~//
const capitalize=aString=>aString.toUpperCase();
const swapCase=aString=>{
    const stringArray=aString.split(' ');
    const capsStringArray=stringArray.map((str,index)=>index%2===0 ? capitalize(str) : str);
    /*
        if(index%2===0){
            return capitalize(str);
        }else{
            return str;
        };
    */
    const finalString=capsStringArray.join(' ');
    return finalString;
};

//~~~~~extensionSearch~~~~~//
const extensionSearch=(ext,arr)=>{
    const files=arr.filter(file=>file.includes(ext));
    return files;
};

//~~~~~getPopulation~~~~~//
const getPopulation=(arr1,arr2)=>{
    const foundCountries=arr1.filter(country=>arr2.includes(country.name));
    const adder=(totalPopulation,currentCountry)=>{
        return totalPopulation+currentCountry.population;
    };
    const population=foundCountries.reduce(adder,0);
    return population>0 ? population:2117902300;
};

//~~~~~powerLevelAverage~~~~~//
/*
// solving keyifyArrayOfObjects without reduce //
const keyifyArrayOfObjects=(key,arr)=>{
    const keyifiedSupes={};
    for(let obj of arr){
        keyifiedSupes[obj[key]]=obj;
    };
    return keyifiedSupes;
};
*/
const keyifyArrayOfObjects=(key,arr)=>{
    const keyify=(keyifiedSupes,currentSupe)=>{
        keyifiedSupes[currentSupe[key]]=currentSupe;
        return keyifiedSupes;
    };
    const keyifiedSupes=arr.reduce(keyify,{});
    return keyifiedSupes;
};

//~~~~~powerLevelAverage~~~~~//
const powerLevelAverage=arr=>{
    const addPowerLevel=(totalPowerLevel,currentSupe)=>{
        totalPowerLevel+=currentSupe.powerLevel;
        return totalPowerLevel;
    }; 
    const totalPowerLevel=arr.reduce(addPowerLevel,0);
    const averagePowerLevel=Math.round(totalPowerLevel/arr.length);
    return averagePowerLevel;
};

//~~~~~mapReduce~~~~~//
const mapReduce = (arr, aFunc) => {
    const newFunc=(newArray,currentItem)=>{
      newArray.push(aFunc(currentItem));
      return newArray;
    };
    const newArray=arr.reduce(newFunc,[]);
    return newArray;
};

//~~~~~filterReduce~~~~~//
const filterReduce = (arr, aFunc) => {
    const newFunc=(newArray,currentItem)=>{
      if(aFunc(currentItem)) newArray.push(currentItem);
      return newArray;
    };
    const newArray=arr.reduce(newFunc,[]);
    return newArray;
};

//~~~~~inYourBudget~~~~~//
const inYourBudget=(budget,arr)=>{
    const filteredItems=arr.filter(item=>item.price<budget);
    const mappedItems=filteredItems.map(item=>item.item);
    return mappedItems;
};

//~~~~~separateAndReturnNames~~~~~//
const separateAndReturnNames=(arr,whichName,nameLength)=>{
    arr.map(supe=>{
        //const nameArray=supe.name.split(' ');
        //const firstName=nameArray[0];
        //const lastName=nameArray[1];
        const [firstName,lastName]=supe.name.split(' ');
        supe.firstName=firstName;
        supe.lastName=lastName;
        return supe;
    });
    const filteredSupeNames=arr.filter(supe=>supe[whichName].length<=nameLength);
    const finalSupeNames=filteredSupeNames.map(supe=>supe[whichName]);
    return finalSupeNames;
};

//~~~~~todo list~~~~~//
const priorityTodoDuration=arr=>{
    const filteredTasks=arr.filter(task=>task.priority==='high');
    const addTime=(totalTime,currentTask)=>{
        return totalTime+currentTask.duration;
    };
    const totalTime=filteredTasks.reduce(addTime,0);
    return totalTime;
};