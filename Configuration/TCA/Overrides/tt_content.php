<?php
defined('TYPO3_MODE') or die();
call_user_func(function () {
    // Adds the content element to the "Type" dropdown
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
        [
            'LLL:EXT:bdptemplate/Resources/Private/Language/Tca.xlf:bdptemplate_textimageblock',
            'bdptemplate_textimageblock',
            'EXT:bdptemplate/Resources/Public/Icons/ContentElements/bdptemplate-contentelement-textimageblock.svg'
        ],
        'CType',
        'bdptemplate'
    );

// Configure the default backend fields for the content element
    $GLOBALS['TCA']['tt_content']['types']['bdptemplate_textimageblock'] = [
        'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
            bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.media,
            assets,
            --palette--;;textimageblockMediaAdjustments,
            --palette--;;textimageblockGallerySettings,
            --palette--;;imagelinks,
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
            'bodytext' => [
                'config' => [
                    'enableRichtext' => true,
                    'richtextConfiguration' => 'default'
                ]
            ],
            'assets' => [
                'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('assets', [
                    'appearance' => [
                        'createNewRelationLinkTitle' => 'LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.asset_references.addFileReference'
                    ],
                    'maxitems' => 1,
                    'minitems' => 1,
                    // custom configuration for displaying fields in the overlay/reference table
                    // behaves the same as the image field.
                    'overrideChildTca' => [
                        'types' => [
                            '0' => [
                                'showitem' => '
                                --palette--;;imageoverlayPalette,
                                --palette--;;filePalette'
                            ],
                            \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                                'showitem' => '
                                --palette--;;imageoverlayPalette,
                                --palette--;;filePalette'
                            ]
                        ],
                    ],
                ], $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']),
            ],
        ],
        'columns' => [
            'imageorient' => [
                'config' => [
                    'default' => 25,
                ],
            ],
        ],
    ];
    // custom palettes
    $GLOBALS['TCA']['tt_content']['palettes']['textimageblockGallerySettings'] = [
        'label' => 'LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.palette.gallerySettings',
        'showitem' => '
            imageorient;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:imageorient_formlabel,
        ',
    ];
    $GLOBALS['TCA']['tt_content']['palettes']['textimageblockMediaAdjustments'] = [
        'label' => 'LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.palette.mediaAdjustments',
        'showitem' => '
            imagewidth;LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.palette.mediaAdjustments.imagewidth,
            imageheight;LLL:EXT:frontend/Resources/Private/Language/Database.xlf:tt_content.palette.mediaAdjustments.imageheight,
        ',
    ];
});
