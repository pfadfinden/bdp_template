<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

if (TYPO3_MODE === 'BE') {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
            'bdp_template',
            'Configuration/PageTS/page.ts',
            'BdP Root PageTS'
    );
}
