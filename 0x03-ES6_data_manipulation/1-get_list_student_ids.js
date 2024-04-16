export default function getListStudentIds(arrays) {
  if (arrays instanceof Array === false) {
    return [];
  }
  return arrays.map((obj) => (
    obj.id
  ));
}
