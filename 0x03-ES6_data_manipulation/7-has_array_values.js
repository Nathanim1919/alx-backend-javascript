export default function hasValuesFromArray(set, array) {
  array.map((value) => set.has(value));
}
