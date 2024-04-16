export default function getListStudentIds(arrays) {
  if (arrays.isArray === false) {
    return [];
  }
  return arrays.map((obj) => (
    obj.id
  ));
}
