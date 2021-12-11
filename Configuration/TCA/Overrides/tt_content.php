<?php

use B13\Container\Tca\ContainerConfiguration;
use B13\Container\Tca\Registry;
use TYPO3\CMS\Core\Utility\GeneralUtility;

defined('TYPO3_MODE') || die();

call_user_func(static function()
{
    $containerRegistry = GeneralUtility::makeInstance(Registry::class);
    // register 1x8-1x4 container
    $containerRegistry->configureContainer(
        (
            new ContainerConfiguration(
                'bdp-1x8-1x4-container', // CType
                '1x8-1x4 container', // label
                'Ein zweispaltiges Inhaltselement', // description
                [
                    [
                        [
                            'name' => '1x8 Inhalt',
                            'colPos' => 101,
                            'colspan' => 8,
                        ],
                        [
                            'name' => '1x4 Inhalt',
                            'colPos' => 102,
                            'colspan' => 4,
                        ]
                    ]
                ] // grid configuration
            )
        )
            // set an optional icon configuration
            //->setIcon('EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg')
    );

    // register 2x6 container
    $containerRegistry->configureContainer(
        (
        new ContainerConfiguration(
            'bdp-2x6-container', // CType
            '1x6 1x6 container', // label
            'Ein zweispaltiges Inhaltselement', // description
            [
                [
                    [
                        'name' => '1x6 Inhalt',
                        'colPos' => 101,
                        'colspan' => 1,
                    ],
                    [
                        'name' => '1x6 Inhalt',
                        'colPos' => 102,
                        'colspan' => 1,
                    ]
                ]
            ] // grid configuration
        )
        )
    // set an optional icon configuration
    //->setIcon('EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg')
    );

    // register 3x4 container
    $containerRegistry->configureContainer(
        (
        new ContainerConfiguration(
            'bdp-3x3-container', // CType
            '1x4 1x4 1x4 container', // label
            'Ein dreispaltiges Inhaltselement', // description
            [
                [
                    [
                        'name' => '1x4 Inhalt',
                        'colPos' => 101,
                        'colspan' => 1,
                    ],
                    [
                        'name' => '1x4 Inhalt',
                        'colPos' => 102,
                        'colspan' => 1,
                    ],
                    [
                        'name' => '1x4 Inhalt',
                        'colPos' => 103,
                        'colspan' => 1,
                    ]
                ]
            ] // grid configuration
        )
        )
    // set an optional icon configuration
    //->setIcon('EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg')
    );

    // register 1x12 container
    $containerRegistry->configureContainer(
        (
        new ContainerConfiguration(
            'bdp-1x12-container', // CType
            '1x12 container', // label
            'Ein Container Inhaltselement', // description
            [
                [
                    [
                        'name' => 'Inhalt',
                        'colPos' => 101,
                        'colspan' => 1,
                    ]
                ]
            ] // grid configuration
        )
        )
    // set an optional icon configuration
    //->setIcon('EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg')
    );
});

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:bdp_text-image.title',
        'bdp_text-image',
        'content-beside-text-img-centered-right',
    ],
    'textmedia',
    'after'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:bdp_teaser-image.title',
        'bdp_teaser-image',
        'gallery',
    ],
    'textmedia',
    'after'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:bdp_cta.title',
        'bdp_cta',
        'content-certificate',
    ],
    'textmedia',
    'after'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:bdp_shift-box-banner.title',
        'bdp_shift-box-banner',
        'content-beside-text-img-centered-right',
    ],
    'textmedia',
    'after'
);


