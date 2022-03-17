
let students = [];
let courses = [];

function Student(name, dob, qualification){
    this.name = name;
    this.dob = dob;
    this.qualification = qualification;

    this.attendance = [];
    this.grades = [];
    this.course;
    this.avarageGrade = 0;
}

Student.prototype.enroll = function(course){
    this.course = course;
}

Student.prototype.grade = function(course, grade, date){
    this.grades.push({
        course: course.name,
        grade,
        date
    });
}

Student.prototype.calculateAvarageGrade = function(){
    const total = this.grades.reduce((total, courseGrade)=>{
        total += courseGrade.grade;
        return total;
    }, 0);

    this.avarageGrade = total / this.grades.length;
}

function Course(name, description){
    this.name = name;
    this.description = description;
}

courses = [
    new Course("UI design", "How to design user interfaces"),
    new Course("Core", "How to create backend using Python")
]