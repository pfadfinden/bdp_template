<?php
defined('TYPO3') || die();

$GLOBALS['TCA']['tt_content']['types']['bdp_cta'] = [
    'previewRenderer' => \TYPO3\CMS\Backend\Preview\StandardContentPreviewRenderer::class,
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            header,
            header_link,
            header_position,
            layout,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
            space_before_class, space_after_class,
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
        'header' => [
            'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_db.xlf:bdp_cta.text',
        ],
    ]
];
