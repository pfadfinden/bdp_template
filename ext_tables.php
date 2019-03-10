<?php

/**
 *
 * This file is part of the package pfadfinden/bdp_template.
 *
 * For the full copyright and license information, please read
 * the LICENSE file that was distributed with this source code.
 */

defined('TYPO3_MODE') || die();

$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \TYPO3\CMS\Core\Imaging\IconRegistry::class
);
$iconRegistry->registerIcon(
    'bdptemplate-contentelement-textimageblock',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:bdptemplate/Resources/Public/Icons/ContentElements/bdptemplate-contentelement-textimageblock.svg']
);