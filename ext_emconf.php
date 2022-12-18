<?php

/**
 * Extension Manager/Repository config file for ext "bdp_template".
 */
$EM_CONF['bdp_template'] = [
    'title' => 'BdP Template',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'fluid_styled_content' => '11.5.0-11.5.99',
            'rte_ckeditor' => '11.5.0-11.5.99',
            'container' => "2.1.0-2.1.99",
            'typo3_encore' => '5.0.0-5.0.99',
            'z7_semantilizer' => '3.0.0-3.99.99',
            'om_cookie_manager' => "11.0.0-11.99.99",
            'content-defender' => "3.2.2-3.2.99",
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
    'clearCacheOnLoad' => true,
    'author' => 'Christian Schrebe',
    'author_email' => 'christian.schrebe@pfadfinden.de',
    'author_company' => 'Pfadfinden',
    'version' => '5.0.0',
];
