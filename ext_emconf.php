<?php

/**
 * Extension Manager/Repository config file for ext "bdptemplate".
 */
$EM_CONF['bdp_template'] = [
    'title' => 'BdP Template',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-10.4.99',
            'fluid_styled_content' => '10.2.0-10.4.99',
            'rte_ckeditor' => '10.2.0-10.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Pfadfinden\\BdpTemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Christian Schrebe',
    'author_email' => 'christian.schrebe@pfadfinden.de',
    'author_company' => 'Pfadfinden',
    'version' => '1.0.0',
];
