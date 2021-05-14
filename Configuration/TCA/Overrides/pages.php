<?php
defined('TYPO3_MODE') || die();

call_user_func(static function()
{
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
