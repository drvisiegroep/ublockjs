(function() {
// >>>> start of private namespace
'use strict';

  /// ublockjs.js
  /// alias rm_ad.js

  (function() {
    document.getElementById("originalDiv").className = "bla";
    console.log('ublock scriptlet');
  });

  /// muted.js
  (function() {
    document.querySelector('.SmartxPlayer__unmuteVideoWrapperDesktop__1Dk76').className = "bla";
    console.log('ublock scriptlet');
  });

// These lines below are skipped by the resource parser.
// <<<< end of private namespace
})();
