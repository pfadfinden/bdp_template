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
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
            'rte_ckeditor' => '12.4.0-12.4.99',
            'container' => "2.3.5-2.3.99",
            'vite-asset-collector"' => '1.9.0-1.99.99',
            'z7_semantilizer' => '4.0.1-4.99.99',
            'om_cookie_manager' => "12.0.1-12.99.99",
            'content-defender' => "3.4.0-3.4.99",
        ],
        'conflicts' => [
        ],
        'suggests' => [
            'news' => "11.1.0-0.0.0",
            "tt-address"=> "8.0.0-0.0.0"
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Pfadfinden\\BdpTemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'author' => 'Christian Schrebe',
    'author_email' => 'christian.schrebe@pfadfinden.de',
    'author_company' => 'Pfadfinden',
    'version' => '6.0.0',
];
