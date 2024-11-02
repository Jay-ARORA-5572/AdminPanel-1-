
// Register course
export interface RegistrationCourse {
    institutionId: string;
    coursename: string;
    coursesubtitle: string;
    duration: string;
    fee: string;
    description: string;
    file: File | null;  // Image upload fields
    instructor: string;    // Teacher
    rating: string;
    country: string;
}


// Chapter create for course
export interface chapter {
    courseId: string;
    title: string
}



// Video upload 

export interface vidoeupload {
    courseId: string;
    chapterId: string;
    title: string;
    file: "";
}