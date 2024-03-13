//sum(1)(2)(3) return the sum of all arguments
const sumCurried = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

const sum = sumCurried(1)(2)(3);
console.log(sum);

//evaluate  ("sum")(4)(2) = 6, ("multiply")(4)(2)
const evaluateCurried = (a) => {
    return (b) => {
        return (c) => {
            switch (a) {
                case "sum":
                    return b + c;
                case "subtract":
                    return b - c;
                case "multiply":
                    return b * c;
                case "divide":
                    return b / c;
            }
        }
    }
}
console.log(evaluateCurried("sum")(6)(2))
console.log(evaluateCurried("multiply")(6)(2))


//Infinite Currying, take n number of parameters and handle.
//sum(1)(2)(2)....(n)

const infiniteCurrying = (a) => {
    return (b) => {
        if (b) return infiniteCurrying(a + b);
        return a;
    }
}

console.log(infiniteCurrying(12)(8)(3)(1)(10)());
console.log(infiniteCurrying(12)(10)());


// Implement a curry function which takes a normal function and convert into curried function

const curry = (fn) => {
    if (args.length === 1) {
        return () => {
            return args[0];
        }
    }
    return () => {

    }
}

const sum = (a, b, c) => {
    return a + b + c;
}

const currySum = curry(sum);

console.log(currySum(1)(2))