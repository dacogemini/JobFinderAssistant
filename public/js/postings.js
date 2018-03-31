$( document ).ready(function() {
    console.log( "ready!" );
    $.get("/api/job", function(data, status){
    	console.log(JSON.stringify(data));
        console.log("Data: " + data.jobs[0].url + "\nStatus: " + status);
        $("#job-post-1").text(data.jobs[0].company);
        $("#date-1").text(data.jobs[0].created);
        $("#link-1").attr("href", "http://" + data.jobs[0].url);
        $("#job-post-2").text(data.jobs[1].company);
        $("#date-2").text(data.jobs[1].created);
        $("#link-2").attr("href", "http://" + data.jobs[1].url);
    });
});


