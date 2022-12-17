<?php
defined('TYPO3') || die();

call_user_func(static function()
{

    $tca = [
        'palettes' => [
            'button' => [
                'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_tca.xlf:pages.palettes.button',
                'showitem' => 'bdp_button_value, --linebreak--, bdp_button_link',
            ],
        ],
        'columns' => [
            'is_siteroot' => [
                'onChange' => 'reload',
            ],
            'bdp_button_value' => [
                'exclude' => true,
                'l10n_mode' => 'prefixLangTitle',
                'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_tca.xlf:pages.bdp_button_value',
                'displayCond' => 'FIELD:is_siteroot:=:1',
                'config' => [
                    'type' => 'input',
                    'size' => 40,
                    'max' => 255,
                    'eval' => 'trim',
                ],
            ],
            'bdp_button_link' => [
                'exclude' => true,
                'label' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_tca.xlf:pages.bdp_button_link',
                'displayCond' => 'FIELD:is_siteroot:=:1',
                'config' => [
                    'type' => 'input',
                    'renderType' => 'inputLink',
                    'size' => 50,
                    'max' => 1024,
                    'eval' => 'trim',
                    'fieldControl' => [
                        'linkPopup' => [
                            'options' => [
                                'title' => 'LLL:EXT:bdp_template/Resources/Private/Language/locallang_tca.xlf:pages.bdp_button_link',
                                'blindLinkFields' => 'class,target,title',
                                'blindLinkOptions' => 'mail,folder,file,telephone',
                            ],
                        ],
                    ],
                    'softref' => 'typolink',
                ],
            ],
        ],
    ];
    $GLOBALS['TCA']['pages'] = array_replace_recursive($GLOBALS['TCA']['pages'], $tca);

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
        'pages',
        '
    --div--;LLL:EXT:bdp_template/Resources/Private/Language/locallang_tca.xlf:pages.tabs.button,
        --palette--;;button',
        (string)\TYPO3\CMS\Core\Domain\Repository\PageRepository::DOKTYPE_DEFAULT,
        'after:config'
    );

    /**
     * Temporary variables
     */
    $extensionKey = 'bdp_template';

    /**
     * Default PageTS for Bdptemplate
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'bdpTemplate'
    );
});
