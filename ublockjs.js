/// cyfoblock.js
/// alias cb.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("originalDiv").className = "bla";
  setTimeout(function(){
    document.getElementByClassName("ad-modal").className = "bla";    
  }, 3000)
  console.log('ublock scriptlet');
});

/// mutedblock.js
/// alias mb.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.SmartxPlayer__unmuteVideoWrapperDesktop__1Dk76').className = "bla";
  console.log('ublock scriptlet');
});
