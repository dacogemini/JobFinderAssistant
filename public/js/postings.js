$( document ).ready(function() {
    console.log( "ready!" );
    $.get("/api/job", function(data, status){
    	console.log(JSON.stringify(data));
        console.log("Data: " + data.jobs[0].company + "\nStatus: " + status);
        $("#job-post-1").text(data.jobs[3].company);
        $("#date-1").text(data.jobs[0].created);
    });
});


