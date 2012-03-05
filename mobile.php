<?php require_once('CONFIG.php')?>
<?php require_once('php/helper.php')?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php if($info_array['title'] == "") echo $info_array['firstname'] . " " . $info_array['lastname']; else echo $info_array['title']?></title>
	<meta http-equiv="pragma" content="no-cache" />
	<link rel="stylesheet" type="text/css" href="css/stylemobile.css" media="screen" id="stylesheet" />
	<script type="text/javascript" src="js/functions.js"></script>
</head>

<body>
	
	<div id="about">
	
		<!--p><?php echo $info_array['description']; ?></p-->

		<?php echo $social_links; ?>

	</div>

</body>	
</html>