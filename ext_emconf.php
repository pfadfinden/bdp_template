<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'BdP Template',
	'description' => 'test',
	'category' => 'templates',
	'author' => 'Philipp Steinmetzger',
	'author_email' => 'philipp.steinmetzger@pfadfinden.de',
	'author_company' => 'Bund der Pfadfinderinnen und Pfadfinder e.V.',
	'state' => 'beta',
	'version' => '1.1.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0 - 6.2.99',
			'extbase' => '1.3 - 6.2.99',
			'fluid' => '1.3 - 6.2.99',
			'news' => '3.2.0 - 3.9.99',
			'filemetadata' => '6.2.0 - 6.2.99',
			'gridelements' => '3.2.0 - 3.2.99',
		),
		'conflicts' => array(),
		'suggests' => array(),
	),
);

?>
