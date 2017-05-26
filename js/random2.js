function getRandomNumber(lower, upper){
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error('One of the values is not a number');
	}else{
	return Math.floor(Math.random()*(upper-lower)+1)+lower;
	}
}
alert(getRandomNumber(1,6));