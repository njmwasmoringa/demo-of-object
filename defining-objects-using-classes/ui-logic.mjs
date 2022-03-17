import { Course, Student, students, courses } from './business-logic.mjs'

$(document).ready(function(){

    $('form').on('submit', function(evt){
        evt.preventDefault();

        const form = this;
        const name = $(this).find('#name1').val();
        const dob = $(this).find('#dob').val();
        const qualification = $(this).find('#qualification').val();
        const course = $(this).find('#course').val();

        const courseObj = courses.find((c)=>c.name === course);
        const student = new Student(name, dob, qualification);
        student.enroll(courseObj);
        students.push(student);

        form.reset();
        updateTheTable();
        /* const formData = new FormData(form);
        console.log(formData.get('name')); */

    });

    for(let course of courses){
        $('#course').append(`<option value="${course.name}">${course.name}</option>`);
    }

});

function updateTheTable(){
    $('table tbody').html('');
    for(let student of students){
        $('table tbody').append(`
            <tr>
                <td>${student.name}</td>
                <td>${student.course.name}</td>
                <td>${student.avarageGrade}</td>
                <td> <button type="button" class="btn gradingButton">Grade</button> </td>
            </tr>
        `);
    }

    $('table tbody button').each(function(){
        $(this).on('click', grade);
    });
}

function grade(){

    const grade = prompt("Enter the grade");
    sendEmailToStudent();
}

function sendEmailToStudent(){
    /* 
    code to send email
    */

    alert("Email sent to student")
}