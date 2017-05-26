var html = '';
var red;
var green;
var blue;
var rgbColor;

function rgbColor(){
	return Math.floor(Math.random() * 256);
}
function randomColor(){
	var Color = 'rgb(' + rgbColor() + ',' + rgbColor() + ',' + rgbColor() + ')';
	return Color;
}


for(i=0; i<10; i++){
	
	html += '<div style="background-color:' + randomColor() + '"></div>';
}

document.write(html);