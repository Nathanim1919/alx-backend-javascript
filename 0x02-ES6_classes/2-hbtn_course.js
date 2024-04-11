export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    } else if (students.some((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    } else {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  }

  get name() {
    return this.name;
  }

  get length() {
    return this.length;
  }

  get students() {
    return this.students;
  }

  set name(newName) {
    this.name = newName;
  }

  set length(newLength) {
    this.length = newLength;
  }

  set students(newStudents) {
    this.students = newStudents;
  }
}
