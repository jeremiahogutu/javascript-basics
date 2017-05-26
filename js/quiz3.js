var quiz = [
	{
		question: 'How many states are in the United States?', 
		answer: 50
	},
	{
		question: 'How many continents are there?', 
		answer: 7
	},
	{	
		question: 'How many legs does an insect have?', 
		answer: 6
	}
	];
var counter = 0;
var html;
var question;
var answer;
var response;
var rightResponse = [];
var wrongResponse = [];

function print(message) {
  var outputDiv =  document.getElementById('listDiv');
  outputDiv.innerHTML = message;
}

function printList(value) {
	var listHTML = '<ol>';
	for (var i = value.length - 1; i >= 0; i--) {
	listHTML += '<li>' + value[i] + '</li>' 
	}
	listHTML += '</ol>';
	return listHTML;
}

for(var i=0; i<quiz.length; i++){
	question = quiz[i].question;
	answer = quiz[i].answer;
	response = parseInt(prompt(question));

	if (response === answer ) {
		counter++;
		rightResponse.push(question);
	} else {
		wrongResponse.push(question);
	}
	
}

html =  'You got '+counter+' question(s) right.'
html += '<h2>You got these questions correct:</h2>';
html += printList(rightResponse);
html += '<h2>You got these questions wrong:</h2>';
html += printList(wrongResponse);
print(html);
