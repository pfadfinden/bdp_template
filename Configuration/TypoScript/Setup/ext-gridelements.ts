tt_content.gridelements_pi1.10 = < lib.stdheader
tt_content.gridelements_pi1.20.10.setup {
  twocolums < lib.gridelements.defaultGridSetup
  twocolums {
    wrap = <div class="grid-g">|</div>
    columns {
      10 < .default
      10.wrap = <div class="grid-u-1-2">|</div>
      20 < .default
      20.wrap = <div class="grid-u-1-2">|</div>
    }
  }
  threecolums < .twocolums
  threecolums {
    columns {
      10 < .default
      10.wrap = <div class="grid-u-1-3">|</div>
      20 < .default
      20.wrap = <div class="grid-u-1-3">|</div>
      30 < .default
      30.wrap = <div class="grid-u-1-3">|</div>
    }
  }
}
