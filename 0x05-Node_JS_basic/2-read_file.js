/**
 * Function that reads a file and prints the number of students in each field
 * @param {string} file - Path to the file
 * @return {undefined}
 */


const fs = require('fs');


function countStudents(file) {
  try {
    const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n').filter((line) => line);
    const fields = {};
    let count = 0;

    for (const i of data) {
      if (fields[i]) {
        fields[i] += 1;
      } else {
        fields[i] = 1;
      }
      count += 1;
    }

    console.log(`Number of students: ${count}`);
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        console.log(`Number of students in ${key}: ${fields[key]}. List: ${data.filter((line) => line === key).join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;