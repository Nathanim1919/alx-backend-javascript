export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const str = Array.from(set).filter((s) => s && s.startsWith(startString));
  return str.map((s) => s.slice(startString.length)).join('-');
}
