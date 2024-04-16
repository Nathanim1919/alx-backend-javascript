export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const students = listOfStudents.filter((student) => student.location === city);
  const updatedStudents = students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
  return updatedStudents;
}
