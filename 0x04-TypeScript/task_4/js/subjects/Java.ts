export class Java extends Subjects.Subject{
    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava === undefined) {
            return 'No available teacher';
        }
        return 'Available Teacher: ' + this.teacher.firstName;
    }
}
