<?php
declare(strict_types=1);

namespace Pfadfinden\BdpTemplate\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

final class UriHostViewHelper extends AbstractViewHelper
{

    public function render(): string {
        $uri = $this->renderChildren();

        // The children of the ViewHelper might be empty now
        if (!is_string($uri)) {
            return '';
        }
        return (string) parse_url($uri, PHP_URL_HOST);
    }
}
