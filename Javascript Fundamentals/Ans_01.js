function outerFunction(param) {
    let variable = "I'm a variable within outerFunction.";
    
    function innerFunction() {
        console.log(param, variable);
    }
    
    return innerFunction;
  }
  
  const innerFunc = outerFunction('Parameter');
  innerFunc();
  