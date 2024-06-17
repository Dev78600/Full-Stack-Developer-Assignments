// Student object
const student = {
    name: 'John Doe',
    age: 25,
    major: 'Computer Science'
  };
  
  // a) Prevent any further additions of properties to the student object
  Object.preventExtensions(student);
  
  // b) Check if the student object is extensible
  const extensibleStatus = Object.isExtensible(student);
  
  // Teacher object
  const teacher = {
    name: 'Jane Smith',
    subject: 'Math'
  };
  
  // d) Seal the teacher object
  Object.seal(teacher);
  
  // e) Check if the teacher object is sealed
  const sealedStatus = Object.isSealed(teacher);
  
  // f) Print the statuses to the console
  console.log(`Student object is extensible: ${extensibleStatus}`);
  console.log(`Teacher object is sealed: ${sealedStatus}`);
  