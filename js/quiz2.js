/*
This is a quiz program that get the user input and awards the
user a score based on the number of correct answers.
*/

var score = 0;

var firstQuestion = prompt('What is said to be a man\'s best friend');
if (firstQuestion.toUpperCase()==='DOG') {
	score++;
}
var secondQuestion = prompt('Best basketball player?');
if(secondQuestion.toUpperCase()==='LEBRON'){
	score++;
}
var thirdQuestion = prompt('Best soccer professional soccer player?');
if (thirdQuestion.toUpperCase()==='CHRISTIANO RONALDO') {
	score++;
}
var fourthQuestion = prompt('What is the best gaming laptop?');
if (fourthQuestion.toUpperCase()==='ALIENWARE') {
	score++;
}
var fifthQuestion = prompt('Who is the fastest professional runner?');
if (fifthQuestion.toUpperCase() === 'USAIN BOLT') {
	score++;
}

if (score===5) {
	alert('Congratulations you have answered all '+score+' questions correctly and have been awarded the gold crown');	
}else if (score==4|| score==3) {
	alert('Congratulations you have answered '+score+' questions correctly and have been awarded the silver crown');
}else if (score==2 || score==1) {
	alert('Congratulations you have answered '+score+' questions correctly and have been awarded the bronze crown');
}else{
	alert('Sorry you did not answer any of the questions correctly');
}
