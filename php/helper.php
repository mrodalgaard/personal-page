<?php
// Helper functions for the social links in php

$social_links = '';
foreach ($social_array as $key => $value) {
	if ($value != '') {
		$social_links .= '<a href="' . $value . '" class="button" id="' . $key . '"></a>';
	}
}

?>