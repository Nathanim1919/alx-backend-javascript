export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((a, b) => a.id + b.id, 0);
}
