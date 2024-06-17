const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middle = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 !== 0 ? ages[middle] : (ages[middle - 1] + ages[middle]) / 2;

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const rangeOfAges = maxAge - minAge;

// Compare value of (min - average) and (max - average), use abs() method
const compareMinAvg = Math.abs(minAge - averageAge);
const compareMaxAvg = Math.abs(maxAge - averageAge);

console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Range of Ages: ${rangeOfAges}`);
console.log(`(Min - Average): ${compareMinAvg}, (Max - Average): ${compareMaxAvg}`);
