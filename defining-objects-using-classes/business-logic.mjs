
export let students = [];
export let courses = [];

export class Student{

    name;
    dob;
    qualification;

    attendance = [];
    grades = [];
    course;
    avarageGrade = 0;

    constructor(name, dob, qualification){
        this.name = name;
        this.dob = dob;
        this.qualification = qualification;
    }

    enroll(course){
        this.course = course;
    }

    grade(course, grade, date){
        this.grades.push({
            course: course.name,
            grade,
            date
        });
    }

    calculateAvarageGrade(){
        const total = this.grades.reduce((total, courseGrade)=>{
            total += courseGrade.grade;
            return total;
        }, 0);
    
        this.avarageGrade = total / this.grades.length;
    }
}

export class Course{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

courses = [
    new Course("UI design", "How to design user interfaces"),
    new Course("Core", "How to create backend using Python")
]