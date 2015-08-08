lib.teaser = COA
lib.teaser {
	stdWrap {
		wrap = <div class="teaser">|</div>
		if.isTrue.data = levelmedia:-1
	}

	10 = IMAGE
	10 {
		file {
			import.data = levelmedia:-1
			import.data.required = 1
			treatIdAsReference = 1
			import.listNum = 0
			maxW = 1300
		}
		sourceCollection {
			small {
				width = 640
				srcsetCandidate = 640w
			}
			medium {
				width = 768
				srcsetCandidate = 768w
			}
			big {
				width = 1300
				srcsetCandidate = 1024w
			}
		}
		layoutKey = srcset
		layout < tt_content.image.20.1.layout

	}

	12 = FILES
	12 {
		references.data = levelmedia:-1, slide
		renderObj = TEXT
		renderObj {
			data = file:current:source
			stdWrap.required = 1
			stdWrap.wrap = <div class="teaser__source">Bild:&nbsp;|</div>
		}
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
}
