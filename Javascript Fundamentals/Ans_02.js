function testRegex(pattern, string) {
    const regex = new RegExp(pattern);
    return regex.test(string);
  }
  
  console.log(testRegex('\\d+', 'There are 123 numbers.'));
  