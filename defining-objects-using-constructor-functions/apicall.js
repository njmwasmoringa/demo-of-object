$.ajax({
    url: 'students.json',
    success: function(result){
        console.log(result)
        students = result;
    }
});