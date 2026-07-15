<?php
defined('TYPO3') || die();

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'mt1x12Column', // CType
        'Single background container', // label
        'Ein einspaltiges Inhaltselement', // description
        [
            [
                [
                    'name' => 'Inhalt',
                    'colPos' => 110,
                    'colspan' => 1,
                ],
            ],

        ]
    )
    )
        // override default configurations
        ->setSaveAndCloseInNewContentElementWizard(false)
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'mt3x4Column', // CType
        '3x4 background container', // label
        'Ein dreispaltiges Inhaltselement', // description
        [
            [
                [
                    'name' => 'Inhalt',
                    'colPos' => 110,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage'
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 120,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage'
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 130,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage'
                ]
            ],

        ]
    )
    )
        // override default configurations
        ->setSaveAndCloseInNewContentElementWizard(false)
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'mt1x8-1x4Column', // CType
        '1x8-1x4 background container', // label
        'Ein zweispaltiges Inhaltselement', // description
        [
            [
                [
                    'name' => 'Inhalt',
                    'colPos' => 110,
                    'colspan' => 2,
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 120,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage'
                ]
            ],

        ]
    )
    )
        // override default configurations
        ->setSaveAndCloseInNewContentElementWizard(false)
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'mt2x6Column', // CType
        '2x6 background container', // label
        'Ein zweispaltiges Inhaltselement', // description
        [
            [
                [
                    'name' => 'Inhalt',
                    'colPos' => 110,
                    'colspan' => 1,
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 120,
                    'colspan' => 1,
                ]
            ],

        ]
    )
    )
        // override default configurations
        ->setSaveAndCloseInNewContentElementWizard(false)
);

TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    [
        'header_color' => [
            'exclude' => true,
            'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:tt_content.header_color',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['label' => 'Default', 'value' => ''],
                    ['label' => 'Black', 'value' => 'black'],
                    ['label' => 'White', 'value' => 'white'],
                ],
                'default' => ''
            ],
        ],
        'header_design' => [
            'exclude' => true,
            'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:tt_content.header_design',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    [
                        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.default_value',
                        'value' => '0'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.1',
                        'value' => '1'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.2',
                        'value' => '2'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.3',
                        'value' => '3'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.4',
                        'value' => '4'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.5',
                        'value' => '5'
                    ],
                    [
                        'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout.I.6',
                        'value' => '100'
                    ]
                ],
                'default' => 0
            ]
        ],
    ]
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'header',
    'header_design,header_color',
    'after:header_layout'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'headers',
    'header_design,header_color',
    'after:header_layout'
);
