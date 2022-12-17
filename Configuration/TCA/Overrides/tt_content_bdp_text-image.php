<?php
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') || die();

ExtensionManagementUtility::addTCAcolumns('tt_content',
    [
        'image_position' => [
            'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:imageorient',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    [
                        'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:imageorient.I.10',
                        0,
                        'content-beside-text-img-left'
                    ],
                    [
                        'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:imageorient.I.9',
                        1,
                        'content-beside-text-img-right'
                    ],
                ],
                'default' => 0,
                'fieldWizard' => [
                    'selectIcons' => [
                        'disabled' => false,
                    ],
                ],
            ]
        ]
    ]
);

$GLOBALS['TCA']['tt_content']['types']['bdp_text-image'] = [
    'previewRenderer' => \TYPO3\CMS\Backend\Preview\StandardContentPreviewRenderer::class,
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
            bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.images,
            image,
            --palette--;;mediaAdjustments,
            image_position,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
            --palette--;;frames,
            --palette--;;appearanceLinks,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
            --palette--;;access,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
            categories,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
            rowDescription,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
            ',
    'columnsOverrides' => [
        'image' => [
            'config' => [
                'minitems' => 1,
                'maxitems' => 1,
            ]
        ],
        'bodytext' => [
            'config' => [
                'enableRichtext' => true,
            ]
        ]
    ]
];
