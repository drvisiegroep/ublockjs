(function() {
// >>>> start of private namespace
'use strict';

  /// ublockjs.js
  /// alias rm_ad.js
  window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("originalDiv").className = "bla";
    console.log('ublock scriptlet');
  });

  /// muted.js
  window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.SmartxPlayer__unmuteVideoWrapperDesktop__1Dk76').className = "bla";
    console.log('ublock scriptlet');
  });

// These lines below are skipped by the resource parser.
// <<<< end of private namespace
})();
