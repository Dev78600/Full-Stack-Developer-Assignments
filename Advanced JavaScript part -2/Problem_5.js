if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) return true;
        }
        return false; 
    };
}

let array = [10, 'test', true];
console.log(array.customIncludes('test')); // should log true
