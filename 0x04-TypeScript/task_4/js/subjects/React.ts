export class React extends Subjects.Subject{
    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingReact === undefined) {
            return 'No available teacher';
        }
        return 'Available Teacher: ' + this.teacher.firstName;
    }
}
