lib.nav-secondary = COA
lib.nav-secondary {
  wrap = <div id="nav-secondary">|</div>

  10 = HMENU
  10 {
    special = directory
    special.value = {$plugin.tx_bdptemplate.page.nav-secondary}

    1 = TMENU
    1.expAll = 1
    1.doNotLinkIt = 1
    1 {
      NO = 1
      NO {
        wrapItemAndSub = <div class="nav-secondary__section"><ul> |</ul></div>
        allWrap = <h4>|</h4>
        doNotLinkIt = 1
      }
    }

    2 = TMENU
    2 {
      NO = 1
      NO {
        allWrap = <li>|</li>
      }
    }
  }
}
