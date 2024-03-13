//*** Default binding ***
// function foo() {
//     console.log( this.a );
// }
// var a = 2;
// foo(); // 2 this will refer to global object (window in chrome)


// ** Implicit Binding ***
// function foo() {
//     console.log( this.a );
// }
// var obj = {
//     a: 2,
//     foo: foo };
// obj.foo(); // 2 this will refer to obj, a reference to obj will created in call stack while referring to function call


//** Explicit Binding happens with call,apply and bind
// function foo() {
//     console.log( this.a );
// }
// var obj = { a: 2
// };
// foo.call( obj ); // 2 making foo to explicit point this to obj

//** Hard Binding happens bind(),it returns a new function after
// attaching this to passed attached.
// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
// var obj = { a: 2
// };
// var bar = foo.bind( obj );
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5


//** New Binding
// function foo(a) {
//     this.a = a;
// }
// var bar = new foo( 2 );
// console.log( bar.a ); // 2


// This binding is lost when passed as a callback function

// var obj = {
//     a: 1,
//     print: function () {
//         console.log(this.a)
//     }
// }
//
// setTimeout(obj.print,1000);  // won't work
//
// setTimeout(function (){
//     obj.print()
// },1000);


const calc = {
    total: 0,
    add: function (a) {
        this.total += a;
        return this;
    },
    multiply: function (a) {
        this.total *= a;
        return this;
    },
    subtract: function (a) {
        this.total -= a;
        return this;
    }
}

calc.add(10).multiply(2).subtract(2);
console.log(calc.total)

