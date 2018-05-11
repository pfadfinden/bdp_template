tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = layout
	default = TEXT
	default.value = <div class="box">|</div>
	1 = TEXT
	1.value = <div class="box bdp-yellow">|</div>
	2 = TEXT
	2.value = <div class="box bdp-blue">|</div>
	3 = TEXT
	3.value = <div class="box bdp-red">|</div>
	4 = TEXT
	4.value = <div class="box transparent with-padding">|</div>
	5 = TEXT
	5.value = <div class="box without-padding">|</div>
	6 = TEXT
	6.value = <div class="box float-50">|</div>
	7 = TEXT
	7.value = |
}

lib.fluidContent.settings.media.popup {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams {
		dataWrap = class="lightbox"
	}
}

tt_content.uploads {
	# 20.renderObj.wrap.cObject.20.value = <li class="{register:oddEvenClass} {register:elementClass}">|</li>
	20.renderObj.wrap.cObject.20.value = <div class="masonry-item masonry-item-2"><div class="box">|</div></div>
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
