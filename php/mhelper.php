<?php
// Helper functions for the mobile social links in php

$social_array = array_merge(array('mail' => $info_array['mail']), $social_array);

$social_links = '';
foreach ($social_array as $key => $value) {
	if ($value != '') {
		$social_links .= '<div id="cell" onclick="';
		
		if ($key == 'mail') {
			$social_links .= 'location.href=\'mailto:' . $value;
		}
		else {
			$social_links .= 'window.location = \'' . $value;
		}
		
		$social_links .= '\'" ontouchstart="return true;">
			<table>
				<tr>
					<td width="52px"><icon id="' . $key . '"></icon></td>
					<td>' . $key . '</td>
					<td width="20px"><cellaccessory>></cellaccessory></td>
				</tr>
			</table>
		</div>';
	}
}

?>