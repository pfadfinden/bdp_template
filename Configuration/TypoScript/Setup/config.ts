config {
  admPanel          = 0
  debug             = 0

  doctype           = html5
  xmlprologue       = none

  // Charset Settings
  renderCharset     = utf-8
  metaCharset       = utf-8

  // Cache Settings
  cache_period          = 86400
  cache_clearAtMidnight = 1
  sendCacheHeaders  = 1
  no_cache = 0

  // URL Settings
  tx_realurl_enable = 1
  simulateStaticDocuments = 0

  // Language Settings
  uniqueLinkVars    = 0
  sys_language_uid  = 0
  language          = de
  locale_all        = de_DE.UTF-8
  htmlTag_langKey   = de

  // Link settings
  prefixLocalAnchors = all

  // Remove targets from links
  intTarget         =
  extTarget         =


  // Code cleaning
  disablePrefixComment  = 1

  // Move default CSS and JS to external file
  removeDefaultJS        = 1
  inlineStyle2TempFile   = 1

  compressCss = 1
  concatenateCss = 1

  compressJs = 1

  // Protect mail addresses from spamming
  spamProtectEmailAddresses = -3
  spamProtectEmailAddresses_atSubst = @<span style="display:none;">remove-this.</span>

  // Comment in the <head> tag
  headerComment = Bund der Pfadfinderinnen und Pfadfinder e. V. - Arbeitskreis Öffentlichkeitsarbeit

  pageTitleSeparator = |
  pageTitleSeparator.noTrimWrap = | | |
}