function Calculator() {
    this.add = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };

    this.multiply = function(a, b) {
        return a * b;
    };

  	this.divide = function(a, b) {
    	return a / b; 
  	};
}

const calculator1 = new Calculator();
console.log(calculator1.add(5, 3));
console.log(calculator1.subtract(5, 3));
console.log(calculator1.multiply(5, 3));
console.log(calculator1.divide(5, 3));
