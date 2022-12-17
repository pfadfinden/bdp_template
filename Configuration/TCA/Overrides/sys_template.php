<?php
defined('TYPO3') || die();

call_user_func(static function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'bdp_template';

    /**
     * Default TypoScript for Bdptemplate
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'bdpTemplate'
    );
});
