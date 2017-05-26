var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay =24;
var dayPerWeek = 7;
var weeksPerYear =52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
//document.write('There are '+ secondsPerDay + ' seconds in a day');
var yearsAlive = secondsPerDay * dayPerWeek * weeksPerYear * 21;
document.write('I have been alive for '+yearsAlive+' seconds');