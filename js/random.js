var firstNumber = prompt('What number should the random numbers start from');
var secondNumber = prompt('What number should the random numbers end');
alert("You are now generating numbers between "+firstNumber+" and "+secondNumber);
var answer = Math.floor(Math.random()*((parseInt(secondNumber)-parseInt(firstNumber))+1)+parseInt(firstNumber));
alert(answer);