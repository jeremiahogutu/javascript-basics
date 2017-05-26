var questions = 3;
'[3 questions left]'
var questionsLeft = '[' + questions + ' questions left]';
var adjective = prompt('Please type an adjective ' + questionsLeft); //brave
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var verb = prompt('Please type a verb ' + questionsLeft); //change
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var noun = prompt('Please type a noun ' + questionsLeft); //world
alert('All done. Ready for the message?');
var answer = "There was once a "+adjective+" programmer who wanted to use Javascript to "+verb+" the "+noun+".";
document.write(answer);
