function createStudent(name, year)  {
  return {
    name,
    year,
    courses: [],
    info: function info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse: function addCourse( {name, code} ) {
      this.courses.push({name: name, code: code});
    },
    listCourses: function() {
      return this.courses;
    },

    addNote: function(code, note) {
      let course = this.courses.filter(course => course['code'] === code)[0];
      if (course) {
        if (!course['note']) {
          course['note'] = [];
        }
        course['note'].push(note);
      }
    },

    updateNote: function(code, note) {
      this.courses.forEach((course, i) => {
        if (course['code'] === code) {
          course['note'] = [note];
        }
      });
    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course['note']) console.log(`${course.name}: ` + course['note'].join("; "));
      });
    },

  };
}
function createSchool() {
  return {
    students: [],
    addStudent: function(name, year) {
      let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
      if (!validYears.includes(year)) {
        console.log("Invalid year");
        return;
      }
      this.students.push(createStudent(name,year));
    },
    getStudents() {
      return this.students;
    },
    enrollStudent(student, course) {
      if (!student.courses.includes(course)) student.addCourse(course);
      else {
        console.log("Student already enrolled in course.");
      }
    },
    addGrade(student, courseName, grade) {
      let course = student.listCourses().filter(course => course.name === courseName)[0];

      if (course) course.grade = grade;
      else {
        console.log(`${student} is not enrolled in that course...`);
      }
    },
    getReportCard(student) {
      student.listCourses().forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In Progress`);
        }
      });
    },
    courseReport(courseName) {
      let averageGrade = this.getCourseAverage(courseName);
      if (averageGrade) {
        console.log(`=${courseName} Grades=`);
        this.getStudentsEnrolled(courseName).forEach(student => {
          let grade = this.getCourseGrade(student, courseName);
          if (grade) {
            console.log(`${student.name}: ${grade}`);
          }
        });
        console.log(`---`);
        console.log(`Course Average: ${averageGrade}`);
      }
      return undefined;
    },
    getCourseGrade(student, courseName) {
      let course = student.courses.filter(course => course.name === courseName)[0];
      if (course) return course.grade;
      return undefined;

    },
    getStudentsEnrolled(courseName) {
      let studentsEnrolled = [];
      this.students.forEach(student => {
        if (student.courses.filter(course => course.name === courseName)) studentsEnrolled.push(student);
      });
      return studentsEnrolled;

    },
    getCoursesGrades(courseName) {
      let grades = [];
      this.getStudentsEnrolled(courseName).forEach(student => {
        let grade = this.getCourseGrade(student, courseName);
        if (grade) grades.push(grade);
      });
      return grades;
    },
    getCourseAverage(courseName) {
      let grades = this.getCoursesGrades(courseName);
      if (grades.length > 0) return grades.reduce((accum, currentValue) => accum + currentValue , 0) / grades.length;
      return undefined;
    }
  };
}

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};
let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};
let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
  ],
};
let school = createSchool();
school.students.push(foo, bar, qux);

school.getCoursesGrades('Math');
school.getReportCard(foo);
// console.log(school.getStudentsEnrolled('Math'));
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
