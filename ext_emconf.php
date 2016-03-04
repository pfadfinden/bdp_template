<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'BdP Template',
	'description' => 'BdP Webseiten Layout als Extension für das Content Management System TYPO3',
	'category' => 'templates',
	'author' => 'Philipp Steinmetzger',
	'author_email' => 'philipp.steinmetzger@pfadfinden.de',
	'author_company' => 'Bund der Pfadfinderinnen und Pfadfinder e.V.',
	'state' => 'beta',
	'version' => '2.0.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.6.0 - 7.6.99',
			'extbase' => '7.6.0 - 7.6.99',
			'fluid' => '7.6.0 - 7.6.99',
			'news' => '4.2.0 - 4.2.99',
			'filemetadata' => '7.6.0 - 7.6.99',
			'gridelements' => '7.0.0 - 7.9.99',
			'cal' => '1.10.2 - 1.99.99',
			'fluid_styled_content' => '7.6.0 - 7.6.99',
		),
		'conflicts' => array(),
		'suggests' => array(),
	),
);

?>
