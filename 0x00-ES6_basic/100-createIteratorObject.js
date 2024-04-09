export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce((acc, value) => {
    acc.push(...value);
    return acc;
  }, []);
}
