<?php
defined('TYPO3') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bdptemplate'] = 'EXT:bdp_template/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('@import "EXT:bdp_template/Configuration/TsConfig/Page/All.tsconfig"');

/***************
 * UserTs
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('@import "EXT:bdp_template/Configuration/TsConfig/User/Default.tsconfig"');

