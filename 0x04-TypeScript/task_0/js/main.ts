interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
  firstName: 'Aberham',
  lastName: 'Tadele',
  age: 11,
  location: 'Ethiopia'
}

const Student2: Student = {
    firstName: 'Nathanim',
    lastName: 'Tadele',
    age: 23,
    location: 'Ethiopia'
}


const studentsList: Array<Student> = [Student1, Student2];

const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    table.appendChild(row);
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    row.appendChild(cell1);
    row.appendChild(cell2);
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
});
