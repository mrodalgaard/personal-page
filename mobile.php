<!-- Martin Rodalgaard - (c) 2012 under GPL license -->

<?php require_once('CONFIG.php')?>
<?php require_once('php/mhelper.php')?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php if($info_array['title'] == "") echo $info_array['firstname'] . " " . $info_array['lastname']; else echo $info_array['title']?></title>
	<meta http-equiv="pragma" content="no-cache" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" type="text/css" href="css/mstyle.css" media="screen" id="stylesheet" />
	<script type="text/javascript" src="js/functions.js"></script>
</head>

<body>
	
	<div>
	
		<div id="cell-about">
			<p><?php echo $info_array['description'] ?></p>
		</div>
		
		<div id="cell" onclick="showAbout(); return false;" ontouchstart="return true;">
			<table>
				<tr>
					<td width="52px"><icon id="about"></icon></td>
					<td>about</td>
					<td width="20px"><cellaccessory>></cellaccessory></td>
				</tr>
			</table>
		</div>

		<?php echo $social_links; ?>

	</div>

</body>	
</html>