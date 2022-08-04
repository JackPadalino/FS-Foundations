// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.

// If difference is defined using an assignment expression (with let or const)
// it is not accessible on the "window" object which is where the jasmine `spyOn` function
// checks for the `difference` function.

// Feel free to change the names of the parameters, but if you want your specs to
// pass keep the function// declaration syntax.

/* eslint-disable no-unused-vars */

function difference(arr1, arr2){
    const diffArr=arr1.filter(item=>!arr2.includes(item));
    return diffArr;
};

const symmetricDiff=(arr1,arr2)=>{
    const diffArr1=difference(arr1,arr2);
    const diffArr2=difference(arr2,arr1);
    const symmetricDifference=[...diffArr1,...diffArr2];
    return symmetricDifference;
};