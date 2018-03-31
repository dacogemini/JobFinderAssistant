$("#submit1-button").on("click", function formData () {
	var newJobSubmit = new Object();
		newJobSubmit.company = $("#name").val().trim();
		var coverLetter = $("#cover-letter-file").val().trim();
		var coverLetterFileName = coverLetter.split('\\');
		newJobSubmit.coverLetterFile = coverLetterFileName[2];
		var resume = $("#resume-file").val().trim();
		var resumeFileName = resume.split('\\');
		newJobSubmit.resumeFile = resumeFileName[2];
		newJobSubmit.url = $("#job-url").val().trim();

	console.log(newJobSubmit);
	AjaxPost(newJobSubmit);
})


function AjaxPost (jobApplied) {
	$.ajax({
        type: "POST",
        url: "/api/job",
        data: jobApplied,
        dataType: "json"
    }).then(function(data) {
        console.log(data);    
    });
}

