function searchCharacterClasses(pattern, string) {
    const regex = new RegExp(pattern, 'g');
    return string.match(regex);
  }
  
  console.log(searchCharacterClasses('[A-Z]', 'Find Uppercase Letters LIKE THESE'));
  