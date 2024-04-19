namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }
}


// Declaration merging to add a new optional property to the Teacher interface
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
}


namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
}


namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
}
