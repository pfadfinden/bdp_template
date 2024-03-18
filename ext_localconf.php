<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') || die();
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bdptemplate'] = 'EXT:bdp_template/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
ExtensionManagementUtility::addPageTSConfig('@import "EXT:bdp_template/Configuration/page.tsconfig"');

/***************
 * UserTs
 */
ExtensionManagementUtility::addUserTSConfig('@import "EXT:bdp_template/Configuration/user.tsconfig"');

