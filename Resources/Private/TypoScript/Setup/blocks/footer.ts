lib.footer = COA
lib.footer {
	wrap = <div id="nav-secondary">|</div>
}

lib.nav-footer = COA
lib.nav-footer {
	wrap = <ul id="nav-footer__menu">|</ul>

	7 = TEXT
	7.wrap = <li class="footer_privacy">|</li>
	7.typolink.parameter = {$plugin.tx_bdptemplate.page.imprint}

	20 = TEXT
	20.value = <a href="javascript:window.print()">Seite ausdrucken</a>
	20.wrap = <li class="footer_print">|</li>

	30 = TEXT
	30.value = <a id="bookmarkme" href="#">Seite zu den Favoriten hinzuf&uuml;gen</a>
	30.wrap = <li class="footer_favorite">|</li>

	# 40 = TEXT
	# 40.value = <a href="#">Seite weiterempfehlen</a>
	# 40.wrap = <li class="footer_recommend">|</li>
}
