tt_content.gridelements_pi1.10 = < lib.stdheader
tt_content.gridelements_pi1.20.10.setup {
  twocolums < lib.gridelements.defaultGridSetup
  twocolums {
    wrap = <div class="row">|</div>
    columns {
      10 < .default
      10.wrap = <div class="col s12 m6 l6">|</div>
      20 < .default
      20.wrap = <div class="col s12 m6 l6">|</div>
    }
  }
  threecolums < .twocolums
  threecolums {
    columns {
      10 < .default
      10.wrap = <div class="col s12 m4 l4">|</div>
      20 < .default
      20.wrap = <div class="col s12 m4 l4">|</div>
      30 < .default
      30.wrap = <div class="col s12 m4 l4">|</div>
    }
  }
}
