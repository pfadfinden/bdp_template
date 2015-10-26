lib.nav-primary = COA
lib.nav-primary.wrap = <nav id="nav-primary">|</nav>
lib.nav-primary.1 = HMENU
lib.nav-primary.1 {
  entryLevel = 0
  wrap = <ul id="nav-primary__menu">|</ul>
  1 = TMENU
  1 {
    noBlur = 1
    NO = 1
    NO {
      wrapItemAndSub = <li>|</li>
    }
    ACT < .NO
    ACT {
      wrapItemAndSub = <li class="active">|</li>
    }
    CUR < .NO
    CUR {
      doNotLinkIt = 1
      wrapItemAndSub = <li class="active">|</li>
      allWrap = <span class="current">|</span>
    }
  }
  2 < .1
  2 {
    wrap = <ul>|</ul>
    ACT.wrapItemAndSub = <li class="active">|</li>
  }
}
lib.nav-primary.2 = HTML
lib.nav-primary.2.value = <!-- Platzhaler fuer Bild -->
