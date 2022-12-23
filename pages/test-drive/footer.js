$(document).ready(function() {
   let url = "https://app.clos.sr/download/ios";
   const anonId = document.cookie.split(';').find((row) => row.startsWith('ajs_anonymous_id='))?.split('=')[1];
   let params = {
      from: 'test-drive',
      type: 'test-drive',
      env: window.location.host.includes('work-closer.com') ? 'prod' : 'dev',
      anonymousId: anonId,
   }
   // TODO add all search params to track through
   let link = url+"?"+jQuery.param(params);
    $('#demo-button').attr('href', link);
    $('#demo-qr').empty();
    $('#demo-qr').qrcode({
      width: 160,
      height: 160,
      text: link });
});