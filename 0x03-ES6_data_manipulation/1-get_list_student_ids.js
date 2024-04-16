export default function getListStudentIds(arrays) {
  if (arrays.isArray === false){
    return []
  } else {
    return arrays.map(obj => (
        obj.id
    ))
  }
}
