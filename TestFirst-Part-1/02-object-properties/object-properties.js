/* eslint-disable no-unused-vars */

//~~~~~CODE FOR TEST SUITE 1~~~~~//
function setPropsOnObj(object) {
  object.x = 7;
  object['y'] = 8;
  //object.onePlus = num =>{
  //    return num+1
  //};
  object.onePlus = function onePlus(num) {
    return num + 1;
  };
  return object;
}

//~~~~~CODE FOR TEST SUITE 2~~~~~//
setPropsOnArr = (arr) => {
  arr.hello = () => {
    return 'Hello!';
  };
  arr['full'] = 'stack';
  arr[0] = 5;
  arr.twoTimes = (num) => {
    return num * 2;
  };
  return arr;
};

//~~~~~CODE FOR TEST SUITE 3~~~~~//
setPropsOnFunc = (func) => {
  func.year = '20??';
  func.divideByTwo = (num) => {
    return num / 2;
  };
  return func;
};

//~~~~~CODE FOR TEST SUITE 4~~~~~//
shallowCopy = (obj1, obj2) => {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return [...obj1, ...obj2];
  } else {
    return { ...obj1, ...obj2 };
  }
};

//~~~~~CODE FOR TEST SUITE 5~~~~~//
setPersonProps = (person) => {
  person['name'] = 'Jack';
  person['hobbies'] = ['coding', 'running', 'dancing'];
  person['age'] = 34;
  person.singSong = (verse) => {
    return verse;
  };
  return person;
};
