export namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }
}


// Declaration merging to add a new optional property to the Teacher interface
export namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
}


export namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
}


export namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
}
