let selectedStudent;

$(document).ready(function(){

    updateTheTable();

    const studentFormModal = new bootstrap.Modal($('#addStudentForm'));
    const gradingModal = new bootstrap.Modal($('#gradeingForm'));

    $('#addStudentForm form').on('submit', function(evt){
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
        studentFormModal.hide();
        updateTheTable();
        /* const formData = new FormData(form);
        console.log(formData.get('name')); */

    });

    $('#gradeingForm form').on('submit', function(evt){
        evt.preventDefault();

        const form = this;
        const grade = $(this).find('#grade').val();
        const course = $(this).find('#course').val();
        
        console.log(selectedStudent);
        selectedStudent.grade(course, grade, new Date());

        form.reset();
        gradingModal.hide();
        updateTheTable();
        /* const formData = new FormData(form);
        console.log(formData.get('name')); */

    });

    for(let course of courses){
        $('.courses-select').append(`<option value="${course.name}">${course.name}</option>`);
    }

});

function updateTheTable(){
    $('table tbody').html('');
    let i = -1;
    for(let student of students){
        i++
        $('table tbody').append(`
            <tr>
                <td>${student.name}</td>
                <td>${student.course.name ? student.course.name : '<button class="btn btn-sm btn-warning" data-indexOfStudent="'+i+'">Enroll</button>'}</td>
                <td>${student.avarageGrade}</td>
                <td align="right"><button type="button" class="btn gradingButton" data-indexOfStudent="${i}">Grade</button></td>
            </tr>
        `);
    }

    $('table tbody td:nth-child(4) button').each(function(){
        $(this).on('click', function(){
            const studentData = $(this).data();
            selectedStudent = students[studentData.indexOfStudent];
            const gradingModal = new bootstrap.Modal($('#gradeingForm'));
            gradingModal.show();
        });
    });

    $('table tbody td:nth-child(2) button').each(function(){
        // alert('enroll')
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