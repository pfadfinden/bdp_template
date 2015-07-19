lib.teaser = COA
lib.teaser {

	10 = IMAGE
#	10.layoutKey = srcset
#	10.layout {
#		srcset {
#			element = <img src="###SRC###" srcset="###SOURCECOLLECTION###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###>
#			source = |*|###SRC### ###SRCSETCANDIDATE###,|*|###SRC### ###SRCSETCANDIDATE###
#		}
#	}
#	10.sourceCollection {
#		small {
#			width = 200
#			maxW = 200
#			srcsetCandidate = 600w
#			mediaQuery = (max-device-width: 600px)
#			dataKey = small
#		}
#	}
	10.file {
		import.data = levelmedia:-1
		import.data.required = 1
		treatIdAsReference = 1
		import.listNum = 0
	}

	20 = TEXT
	20 {
		data = page : subtitle
		split{
			token = |
			cObjNum = 1
			1.current = 1
			1.wrap = <div class="teaser__titleline">|</div><br /> |*| | |*| |
		}
		required = 1
		wrap = <div class="teaser__title">|</div>
	}

	stdWrap.wrap = <div id="teaser"><div class="teaser__image" id="teaserImage">|</div></div>
	stdWrap.if.isTrue.data = levelmedia:-1

#	30 = TEXT
#	30 {
#		data = page : abstract
#		stdWrap.required = 1
#		stdWrap.wrap = <div class="teaser__abstract">|</div>
#	}
}
