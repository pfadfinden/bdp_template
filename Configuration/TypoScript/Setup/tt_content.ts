# Wrappe alle Absaetze eines Textelements, ausgenommen Header
# tt_content.text.20.wrap = <div class="csc-article">|</div>
# Kein Wrapping der Textelemente bei Textpic
tt_content.textpic.20.text.20.wrap = |

tt_content.stdWrap.innerWrap.cObject {
	25 =< tt_content.stdWrap.innerWrap.cObject.default
	25.20.10.value = csc-frame csc-frame-frame3
	100 = TEXT
	100.value = <div class="csc-frame csc-frame-frame4">|</div>
	101 = TEXT
	101.value = <div class="csc-frame-frame5">|</div>
	105 = TEXT
	105.value = <div class="csc-frame csc-frame-frame6">|</div>
}

tt_content.image.20.1.imageLinkWrap {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams {
		dataWrap = class="fancybox" rel="lightbox{field:uid}"
	}
}

tt_content.uploads {
	# 20.renderObj.wrap.cObject.20.value = <li class="{register:oddEvenClass} {register:elementClass}">|</li>
	20.renderObj.wrap.cObject.20.value = <div class="masonry-item masonry-item-2"><div class="csc-default">|</div></div>
	20.renderObj.20.wrap = <h2 class="csc-uploads-title">|</h2>

	20.renderObj {
			40 >
			50 = COA
			50.wrap = <div class="csc-uploads-footer">|</div>
			50.5 = TEXT
			50.5 {
				data = file:current:extension
				case = upper
				wrap = <span class="csc-uploads-fileSize">|,&nbsp;
			}
			50.10 = TEXT
			50.10 {
				data = file:current:size
				wrap = |</span>
				bytes = 1
				bytes.labels = {$styles.content.uploads.filesizeBytesLabels}
			}
			50.20 = TEXT
			50.20 {
				value = Herunterladen&nbsp;<span class="glyphicon glyphicon-download"></span>
				wrap = |
				typolink < tt_content.uploads.20.renderObj.10.stdWrap.typolink
			}

	}

	# 20.stdWrap.dataWrap = <ul class="csc-uploads csc-uploads-{field:layout}">|</ul>
	20.stdWrap.dataWrap = <div class="masonry-container">|</div>
}

lib.stdheader.10 {
	80 < .1
	80.dataWrap = <h2 class="header-blaugelb">|</h2>
}
