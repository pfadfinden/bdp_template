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
            'typo3' => '10.4.0-10.4.99',
            'fluid_styled_content' => '10.4.0-10.4.99',
            'rte_ckeditor' => '10.4.0-10.4.99',
            'container' => "1.2.0-1.2.9",
            'typo3_encore' => '3.0.8-3.0.99',
            'z7_semantilizer' => '2.1.1-2.99.99',
            'om_cookie_manager' => "10.0.2-10.99.99",
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
    'version' => '4.0.0',
];
