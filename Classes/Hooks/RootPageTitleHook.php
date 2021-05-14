<?php

namespace Pfadfinden\BdpTemplate\Hooks;

use TYPO3\CMS\Core\Utility\DebugUtility;
use Zeroseven\Semantilizer\FixedTitle\FixedTitleInterface;
use Zeroseven\Semantilizer\Models\ContentCollection;

class RootPageTitleHook implements FixedTitleInterface
{
    public function get(array $params, $parent = null, ContentCollection $contentCollection = null): ?string
    {
        return $params['page']->getData('subtitle') ?: null;
    }
}
