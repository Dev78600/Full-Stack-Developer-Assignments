function extractMatchedGroups(pattern, string) {
    const regex = new RegExp(pattern);
    const match = regex.exec(string);
  
    if (match) {
        return match.groups;
    } else {
        return null;
    }
  }
  
  console.log(extractMatchedGroups('(?<day>\\d{2})-(?<month>\\d{2})-(?<year>\\d{4})', 'Date: 25-12-2020')); 