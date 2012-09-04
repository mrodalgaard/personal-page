/*  
	Helper functions in java
*/

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

function showAbout() {
    document.getElementById('cell-about').style.display = 'block';
    document.getElementById('cell').style.display = 'none';
}

function fullsite_click() {
	window.location = 'index.php?fullsite';
}
