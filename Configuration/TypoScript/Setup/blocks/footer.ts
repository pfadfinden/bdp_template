lib.footer = COA
lib.footer {
	wrap = <footer id="footer"><div id="nav-footer">|</div></footer>

  10 = TEXT
  10.value = {$plugin.tx_bdptemplate.config.organisation}
  10.split {
    token = |
    cObjNum = 1
    1.current = 1
    1.wrap = <div class="nav-footer__titleLine">|</div> |*| | |*| |
  }
  10.wrap = <div class="nav-footer__title">|</div><div class="grid-g nav-footer__content">

  20 < lib.nav-footer

  30 = COA
  30.wrap = <div class="grid-u-1-2"><div itemscope itemtype="http://schema.org/Organization">|</div></div></div>

  30.10 = TEXT
  30.10.value = {$plugin.tx_bdptemplate.contact.name}
  30.10.wrap = <p itemprop="name">|</p>

  30.20 = TEXT
  30.20.value = {$plugin.tx_bdptemplate.contact.address}
  30.20.wrap = <p itemprop="address">|</p>

  30.30 = TEXT
  30.30.value = {$plugin.tx_bdptemplate.contact.phone}
  30.30.if.isTrue.dataWrap = {$plugin.tx_bdptemplate.contact.phone}
  30.30.wrap = <p>Telefon: <span itemprop="telephone">|</span>

  30.40 = TEXT
  30.40.value = {$plugin.tx_bdptemplate.contact.fax}
  30.40.if.isTrue.dataWrap = {$plugin.tx_bdptemplate.contact.fax}
  30.40.wrap = <br />Telefax: <span itemprop="faxNumber">|</span>

  30.50 = TEXT
  30.50.typolink.parameter = {$plugin.tx_bdptemplate.contact.email}
  30.50.wrap = <br />E-Mail: |

  30.60 = TEXT
  30.60.typolink.parameter = {$plugin.tx_bdptemplate.contact.website}
  30.60.wrap = <br />Internet: <span itemprop="website">|</span>

}
