<?php
defined('TYPO3_MODE') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bdptemplate'] = 'EXT:bdp_template/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bdp_template/Configuration/TsConfig/Page/All.tsconfig">');

/***************
 * UserTs
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bdp_template/Configuration/TsConfig/User/Default.tsconfig">');

$GLOBALS['TYPO3_CONF_VARS']['EXT']['z7_semantilizer']['fixedPageTitle'][0] = \Pfadfinden\BdpTemplate\Hooks\RootPageTitleHook::class;
$GLOBALS['TYPO3_CONF_VARS']['EXT']['z7_semantilizer']['fixedPageTitle'][1] = \Zeroseven\Semantilizer\FixedTitle\PageTitle::class;
