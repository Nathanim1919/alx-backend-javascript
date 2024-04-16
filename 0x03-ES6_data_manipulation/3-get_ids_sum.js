export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((a, b) => a + b.id, 0);
}
