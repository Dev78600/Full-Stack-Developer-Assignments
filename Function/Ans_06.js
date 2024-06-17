// CURRYING FUNCTION
function curry(fn, ...args) {
    return args.length >= fn.length ? fn(...args) : (...moreArgs) => curry(fn, ...args, ...moreArgs);
  }
  const add = (a, b) => a + b;
  const curriedAdd = curry(add);
  console.log(curriedAdd(5)(10)); 
  