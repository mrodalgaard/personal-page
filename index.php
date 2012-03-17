<!-- Martin Rodalgaard - (c) 2012 under GPL license -->

<?php require_once('CONFIG.php')?>
<?php require_once('php/helper.php')?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php if($info_array['title'] == "") echo $info_array['firstname'] . " " . $info_array['lastname']; else echo $info_array['title']?></title>
	<meta http-equiv="pragma" content="no-cache" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="<?php if($set_array['blacknwhite'] == TRUE) echo 'css/style.css'; else echo 'css/stylecolor.css'; ?>" media="screen" id="stylesheet" />
	<script type="text/javascript" src="js/functions.js"></script>
</head>

<body <?php if($set_array['mobileversion']) echo 'onload="redirectPhone();"' ?> >
	
	<?php if($set_array['hiddenButton']) echo '<div class="hiddenbutton" onclick="toogleCSS()"></div>'; ?>

	<div id="mail">
		<a href="mailto:<?php echo $info_array['mail']; ?>" class="mail"></a>
	</div>
	
	<div id="about">
	
		<p><?php echo $info_array['description']; ?></p>

		<?php echo $social_links; ?>

	</div>

	<script type="text/javascript" src="js/jquery-1.6.4.min.js"></script>
	<script type="text/javascript" src="js/jquery.backstretch.min.js"></script>
	<script type="text/javascript"> $.backstretch("<?php if($set_array['blacknwhite'] == TRUE) echo 'images/background.jpg'; else echo 'images/background2.jpg'; ?>", {speed: 4500});</script>

</body>	
</html>