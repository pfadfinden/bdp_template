<?php
declare(strict_types=1);

namespace Pfadfinden\Bdptemplate\Hooks\DataHandler;

use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\DataHandling\DataHandler;

class PagesManipulation
{
    /**
     * This method is called by a hook after a record was saved in the BE.
     *
     * @param string        $status
     * @param string        $table
     * @param int           $id
     * @param array         $fieldArray
     * @param DataHandler   $dataHandler
     */
    public function processDatamap_postProcessFieldArray($status, $table, $id, &$fieldArray, &$dataHandler)
    {
        if ('pages' === $table && 'update' === $status) {
            $record = BackendUtility::getRecord('pages', (int)$id, 'is_siteroot');
            if (isset($record['is_siteroot']) === true && (int)$record['is_siteroot'] === 1) {
                // Set 'slug' to '/'
                $fieldArray['slug'] = '/';
            }
        }
    }
}