import {Cpp} from './subjects/Cpp';
import {Java} from './subjects/Java';
import {React} from './subjects/React';
import {Subjects} from "./subjects/Subject";

export const subject = new Subjects.Subject();
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

subject.teacher = cTeacher;

console.log('Cpp');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());


console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
