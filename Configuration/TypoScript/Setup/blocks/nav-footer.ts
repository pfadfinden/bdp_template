lib.nav-footer = COA
lib.nav-footer {
	wrap = <div class="grid-u-1-2"><ul id="nav-footer__menu">|</ul></div>

	7 = TEXT
	7.wrap = <li class="footer_privacy">|</li>
	7.typolink.parameter = {$plugin.tx_bdptemplate.page.imprint}

	20 = TEXT
	20.value = <a href="javascript:window.print()">Seite ausdrucken</a>
	20.wrap = <li class="footer_print">|</li>

	30 = TEXT
	30.value = <a id="bookmarkme" href="#">Seite zu den Favoriten hinzuf&uuml;gen</a>
	30.wrap = <li class="footer_favorite">|</li>
}
