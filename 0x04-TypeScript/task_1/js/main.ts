interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}


interface Directors extends Teacher {
  numberOfReports: number;
}

interface StudentClass {
    firstName: string;
    lastName: string;
    displayName():string;
}


export default function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

class StudentClass implements StudentClass{
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName():string {
        return this.firstName;
    }
}