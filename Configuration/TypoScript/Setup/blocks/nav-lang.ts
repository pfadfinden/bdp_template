lib.nav-lang = HMENU
lib.nav-lang {
    special = language
    special.value = {$plugin.tx_bdptemplate.languages.ids}
    special.normalWhenNoLanguage = 0
    wrap = <ul>|</ul>
    1 = TMENU
    1 {
        noBlur = 1
        # Standard Sprachen
        NO = 1
        NO {
            linkWrap = <li>|</li>
            stdWrap.override = {$plugin.tx_bdptemplate.languages.names}
        }
        # Active language
        ACT < .NO
        ACT {
            doNotLinkIt = 1
        }
        # NO and no translation available
        USERDEF1 < .NO
        USERDEF1 {
            doNotLinkIt = 1
            ATagParams >
        }
        # ACT +  and no translation available
        USERDEF2 < .USERDEF1
        USERDEF1 {
        }
    }
}