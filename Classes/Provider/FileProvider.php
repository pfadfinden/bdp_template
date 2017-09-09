<?php

namespace Pfadfinden\BdpTemplate\Provider;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Jigal van Hemert <jigal.van.hemert@typo3.org>
 *  Based on extension by Georg Ringer
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use TYPO3\CMS\Backend\View\BackendLayout\BackendLayout;
use TYPO3\CMS\Backend\View\BackendLayout\BackendLayoutCollection;
use TYPO3\CMS\Backend\View\BackendLayout\DataProviderContext;
use TYPO3\CMS\Backend\View\BackendLayout\DataProviderInterface;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class FileProvider implements DataProviderInterface {

	/**
	 * Adds backend layouts to the given backend layout collection.
	 *
	 * @param DataProviderContext $dataProviderContext
	 * @param BackendLayoutCollection $backendLayoutCollection
	 * @return void
	 */
	public function addBackendLayouts(DataProviderContext $dataProviderContext, BackendLayoutCollection $backendLayoutCollection) {
		$backendLayoutFiles = $this->getBackendLayoutFiles();
		foreach ($backendLayoutFiles as $file) {
			$backendLayoutCollection->add($this->createBackendLayout($file));
		}
	}

	/**
	 * Gets a backend layout by (regular) identifier.
	 *
	 * @param string $identifier
	 * @param integer $pageId
	 * @return NULL|BackendLayout
	 */
	public function getBackendLayout($identifier, $pageId) {
		$backendLayoutFiles = $this->getBackendLayoutFiles();
		foreach ($backendLayoutFiles as $file) {
			$fileInformation = pathinfo($file);
			if ($identifier === $fileInformation['filename']) {
				return $this->createBackendLayout($file);
			}
		}
	}

	/**
	 * Retrieves backend layout files
	 *
	 * @return array Available backend layout files
	 */
	protected function getBackendLayoutFiles() {
		$directory = GeneralUtility::getFileAbsFileName('EXT:bdp_template/Resources/Private/BackendLayouts');
		$filesInDirectory = GeneralUtility::getFilesInDir($directory, 'ts', TRUE);
		if (!is_array($filesInDirectory)) {
			$filesInDirectory = array();
		}
		return $filesInDirectory;
	}

	/**
	 * Creates backend layout record based on file information
	 *
	 * @param string $file Path and name of file
	 * @return BackendLayout
	 */
	protected function createBackendLayout($file) {
		$fileInformation = pathinfo($file);
		$backendLayout = BackendLayout::create(
			$fileInformation['filename'],
			$this->getTitle($fileInformation),
			GeneralUtility::getUrl($file)
		);
		$this->addIcon($fileInformation, $backendLayout);
		return $backendLayout;
	}

	/**
	 * Retrieves layout title (defaults to file name)
	 *
	 * @param array $fileInformation
	 * @return string
	 */
	protected function getTitle($fileInformation) {
		$title = $fileInformation['filename'];
		$translatedTitle = $this->getLanguageObject()->sL('LLL:EXT:bdp_template/Resources/Private/Language/BackendLayouts.xlf:' . $title);
		if ($translatedTitle) {
			$title = $translatedTitle;
		}
		return $title;
	}

	/**
	 * Registers icon for the backend layout
	 *
	 * @param array $fileInformation Information about the backend layout file
	 * @param BackendLayout $backendLayout
	 * @return void
	 */
	protected function addIcon($fileInformation, BackendLayout $backendLayout) {
		$file = ExtensionManagementUtility::extPath('bdp_template', '/Resources/Public/Backend/Images/' . $fileInformation['filename'] . '.');
		$extensions = array('png', 'gif');
		foreach ($extensions as $extension) {
			if (is_file($file . $extension)) {
				$backendLayout->setIconPath(
					ExtensionManagementUtility::extRelPath('bdp_template') .
					'/Resources/Public/Backend/Images/' . $fileInformation['filename'] . '.' . $extension
				);
				break;
			}
		}
	}

	/**
	 * Returns global language service object
	 *
	 * @return \TYPO3\CMS\Lang\LanguageService
	 */
	protected function getLanguageObject() {
		return $GLOBALS['LANG'];
	}
}