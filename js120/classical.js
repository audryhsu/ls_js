/*
pseudo classical approach - combo of constructors, prototypes, and new keyword
define a constructor function with object properties.
add instance methods to the constructor's prototype.
subclasses inherit all of superclass's methods
*/

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.communicate = function () {
  console.log("Communicating");
};
Person.prototype.eat = function () {
  console.log("Eating");
};
Person.prototype.sleep = function () {
  console.log("Sleeping");
};

let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

function Doctor(firstName, lastName, age, gender, specialty) {
  return Person.call(this, firstName, lastName, age, gender);
  this.specialty = specialty;
}
Doctor.prototype = Object.create(Person.prototype); // proper way to reassign constructor's prototype to a new object.
Doctor.prototype.diagnose = function () {
  console.log("Diagnosing");
};

// console.log(Doctor.prototype.__proto__); // points to global object, need to reassign
// console.log(Doctor.prototype.constructor); // points to Person. Need to update
// Doctor.prototype.constructor = Doctor;
// console.log(Doctor.prototype.constructor); // now correctly points to Doctor constructor.


let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();

function Professor(firstName, lastName, age, gender, subject) {
  return Person(this, firstName, lastName, age, gender);
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function () {
  console.log("teaching");
};
let prof = new Professor('prof', 'oaks', 50, 'male', 'pokemon');

function Student(firstName, lastName, age, gender, degree) {
  return Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log("Gotta catch em all!");
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  return Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function () {
  console.log("Finding the next legendary pokemon...");
};

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');

console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
