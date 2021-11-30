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
      console.log(this.courses);
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

let foo = createStudent('Foo', '1st');
foo.info();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
//[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
// //"Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.addNote(103, 'BAD'); // does not throw error
// //"Math: Fun course; Remember to study for algebra"
// //"Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
//"Math: Fun course"
//"Advanced Math: Difficult subject"
