var obj = {
    a: 1,
    b: 2,
    nestedObj: {
        'nestedKey': 4,
    },
}


// Object Basics get and put operations

// let stringPropertyName = "random";
// obj[stringPropertyName] = 3;
// obj.a;
// obj[stringPropertyName];


//Copying Objects

// -> Deep Copy

// Nested keys are actually copied not referenced, resulting in not affecting each other.

// let deepCopyObj = JSON.parse(JSON.stringify(obj));
//
// obj.nestedObj.nestedKey = 12;
//
// console.log(deepCopyObj.nestedObj.nestedKey);
// console.log(obj.nestedObj.nestedKey);

//->Shallow Copy

// Nested keys are referenced in copied object, resulting in affecting each other.
// let shallowCopy1 = {...obj};
//
// console.log(shallowCopy1.nestedObj.nestedKey);
// console.log(obj.nestedObj.nestedKey);

// let shallowCopy2 = Object.assign({}, obj);


// define property with writable,enumerable

