<?php
/**
 *
 * This file is part of the package pfadfinden/bdp_template.
 *
 * For the full copyright and license information, please read
 * the LICENSE file that was distributed with this source code.
 */

$EM_CONF[$_EXTKEY] = array(
	'title' => 'BdP Template',
	'description' => 'BdP Webseiten Layout als Extension für das Content Management System TYPO3',
	'category' => 'templates',
	'author' => 'Christian Schrebe',
	'author_email' => 'christian.schrebe@pfadfinden.de',
	'author_company' => 'Bund der Pfadfinderinnen und Pfadfinder e.V.',
	'state' => 'dev',
	'version' => '4.0.0',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
	'constraints' => array(
		'depends' => array(
            'typo3' => '9.5.0-9.5.99',
            'rte_ckeditor' => '9.5.0-9.5.99',
			'fluid_styled_content' => '9.5.0-9.5.99',
		),
		'conflicts' => array(
		    'css_styled_content' => '*',
		),
	),
    'autoload' => [
        'psr-4' => [
            'Pfadfinden\\BdpTemplate\\' => 'Classes'
        ],
    ],
);

?>
