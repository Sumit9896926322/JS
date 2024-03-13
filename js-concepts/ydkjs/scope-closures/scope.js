// var vs let vs const

// var is global or function scoped
// var can be redeclared and updated.

// let and const are block scoped
// let and const can only be updated and ont redeclare.
// {
//     let a = 11;
//     a is only accessible here
// }


// Variable Shadowing

let a = 12;
console.log(a);

{
    var a = 13;
}
console.log(a);


fn();
