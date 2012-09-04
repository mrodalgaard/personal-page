<?php

/* INFORMATION */
$info_array = array(

'firstname' 	=> 'Martin',					// Your first name
'lastname' 		=> 'Rodalgaard',				// Your last name
'mail' 			=> 'mrodalgaard@gmail.com',		// Your mail
'title' 		=> '',							// The title of your page. If you leave it blank, it will use your first and last name

// Insert a description of you for the site
// Include links, lists, breaks and other html tags
// WARNING: Avoid using "'"
'description' => '
<a href="http://facebook.com/mrodalgaard">Martin Rodalgaard</a> is a 26 year old engineer living in Aarhus, Denmark, with his wonderful girlfriend <a href="http://facebook.com/profile.php?id=676176876">Rikke</a>.<br><br>
He has a <a href="http://dk.linkedin.com/pub/martin-rodalgaard/41/336/587">Bachelor of Engineering</a> degree in Electrical, Electronic and Computer Engineering, specialized in Embedded Systems. He currently studies at IHA to get a <a href="http://http://dk.linkedin.com/pub/martin-rodalgaard/41/336/587">Business Engineering</a> degree on top of that.<br><br>
He plays soccer in a <a href="http://fcroyal.dk/">local club</a>, traveled the globe while loving it, and have always had an odd passion for programming everything from embedded C to object-oriented Java.<br><br>
The gear he uses almost every day includes his MacBook Pro 2012, iPhone 4S, Canon EOS 550D, Giant \'92 road racer and Line skies. The blogs he enjoys reading includes <a href="http://lifehacker.com">lifehacker</a>, <a href="http://engadget.com">engadget</a> and <a href="http://macworld.com">macworld</a><br><br>
- Catch you on the flip side...
'
);

/* SOCIAL */
$social_array = array(
	
// Insert links and the order of the social websites you want on your personal page
// Leave the unwanted blank or remove them from the array
'facebook' 		=> 'http://facebook.com/mrodalgaard',
'linkedin' 		=> 'http://dk.linkedin.com/pub/martin-rodalgaard/41/336/587',
'flickr' 		=> 'http://flickr.com/mrodalgaard',
'github' 		=> 'http://github.com/MRodalgaard',
'twitter' 		=> 'http://twitter.com/mrodalgaard',
'filmfilmfilm' 	=> 'http://filmfilmfilm.dk'
);

/* SETTINGS */
$set_array = array(

'blacknwhite'	=> TRUE,	// Should the site be in black and white or colors?
'mobile' 		=> TRUE,	// Should you support a mobile version of the site?
'hiddenButton'  => TRUE		// Should the site have a hidden button in the middle to switch from bw to color?
);

/* GOOGLE ANALYTICS */
$g_array = array(

'analytics'		=> FALSE,				// Do you want Google Analytics support
'account'		=> 'UA-31135766-1',		// Account for Google Analytics
'domain'		=> 'rodalgaard.dk'		// Domain for Google Analytics
);
?>