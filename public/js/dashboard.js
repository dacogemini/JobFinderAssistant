$("#submit1-button").on("click", function formData () {
	var newJobSubmit = new Object();
		newJobSubmit.company = $("#name").val().trim();
		var coverLetter = $("#cover-letter-file").val().trim();
		var coverLetterFileName = coverLetter.split('\\');
		newJobSubmit.coverLetterFile = coverLetterFileName[2];
		var resume = $("#resume-file").val().trim();
		var resumeFileName = resume.split('\\');
		newJobSubmit.resumeFile = resumeFileName[2];

	console.log(newJobSubmit);
})









var currentDate = Date.now();

