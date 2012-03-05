
function toogleCSS() {
	var str = document.getElementById('stylesheet').href;
	if (str.indexOf('stylecolor') == -1) { 
		document.getElementById('stylesheet').href = 'css/stylecolor.css';
		$.backstretch("images/background2.jpg", {speed: 1600});
	}
	else {
		document.getElementById('stylesheet').href = 'css/style.css';
		$.backstretch("images/background.jpg", {speed: 1600});
	}
}
