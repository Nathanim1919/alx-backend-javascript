export default function createInt32TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(4 * length);
  const view = new DataView(buffer);
  view.setInt32(position, value);
  return view;
}
