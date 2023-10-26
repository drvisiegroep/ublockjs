/// cyfoblock.js
/// alias cb.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("originalDiv").className = "bla";
  document.getElementByClass("ad-modal").className = "bla";
  console.log('ublock scriptlet');
});

/// mutedblock.js
/// alias mb.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.SmartxPlayer__unmuteVideoWrapperDesktop__1Dk76').className = "bla";
  console.log('ublock scriptlet');
});
