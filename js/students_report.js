var message = '';
var student;
var search;

function print(message) {
  var outputDiv =  document.getElementById('listDiv');
  outputDiv.innerHTML = message;

 }

 function getStudentReport (student) {
 	var report = '<h2>Student: ' + student.name + '</h2>';
 	report += '<p>Track: ' + student.track + '</p>';
 	report += '<p>Points: '+ student.points + '</p>';
 	report += '<p>Achievements: ' + student.achievements + '</p>';
 	return report;
 
 }

 while (true) {
 	search = prompt('Search student record: type a name [Jody] (0r type "quit" to end)');
 	if (search === null || search.toLowerCase() === 'quit') {
 		break;
 	}
 	for (var i = 0; i < students.length; i++) {
 	student = students[i];
 	if ((student.name).toLowerCase() === search ) {
 		message = getStudentReport (student);
		print(message);
 	} else {
 		alert('No student found');
 		break;
 	}
 	
 	}
 }


