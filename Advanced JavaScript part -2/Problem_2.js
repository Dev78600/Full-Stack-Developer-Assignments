function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

function Employee(name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;
    
    this.getDetails = function() {
        console.log("I am a(n) " + this.designation + ".");
    };
}

const employee1 = new Employee("Bob", 40, "Engineer");
employee1.sayHello();
employee1.getDetails();
