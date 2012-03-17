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

function detectPhone()
{
	var uagent = "";
	if (navigator && navigator.userAgent)
	    uagent = navigator.userAgent.toLowerCase();
	
	if (uagent.search("iphone") > -1)
    {
       return true;
    }
    else
       return false;
}

function redirectPhone()
{
	if (detectPhone()) {
		window.location = 'mobile.php';
	}
}

function showAbout() {
    document.getElementById('cell-about').style.display = 'block';
    document.getElementById('cell').style.display = 'none';
}