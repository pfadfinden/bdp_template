<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'BdP Template',
	'description' => 'BdP Webseiten Layout als Extension für das Content Management System TYPO3',
	'category' => 'templates',
	'author' => 'Christian Schrebe',
	'author_email' => 'christian.schrebe@pfadfinden.de',
	'author_company' => 'Bund der Pfadfinderinnen und Pfadfinder e.V.',
	'state' => 'dev',
	'version' => '3.0.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '8.7.8 - 8.7.99',
			'extbase' => '8.7.0 - 8.7.99',
			'fluid' => '8.7.0 - 8.7.99',
			'news' => '6.1.0 - 6.99.99',
			'filemetadata' => '8.7.0 - 8.7.99',
			'gridelements' => '7.1.0 - 7.7.99',
			'cal' => '1.11.1 - 1.99.99',
			'fluid_styled_content' => '8.7.0 - 8.7.99',
		),
		'conflicts' => array(
		    'css_styled_content' => '',
		),
		'suggests' => array(
		    'realurl' => '2.2.1 - 2.99.99',
		),
	),
);

?>
