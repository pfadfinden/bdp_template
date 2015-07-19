lib.analytics = TEXT
lib.analytics.value (
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', '{$plugin.tx_bdptemplate.analytics.tracking_id}', 'auto');
  ga('send', 'pageview', {  'anonymizeIp': true});
</script>
)

[globalVar = LIT:1 = {$plugin.tx_bdptemplate.analytics.enabled}]
page.9999 < lib.analytics
[global]
