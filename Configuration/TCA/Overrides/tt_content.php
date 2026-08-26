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
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage, text'
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 120,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage, text'
                ],
                [
                    'name' => 'Inhalt',
                    'colPos' => 130,
                    'colspan' => 1,
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage, text'
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
                    'allowedContentTypes'=> 'pfadfinden_texttopimage, pfadfinden_smallctaimage, text'
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
