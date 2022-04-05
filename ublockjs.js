console.log("before domload");
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("domload before line.");
    document.getElementById("originalDiv").className = "banner_ad1";
    console.log("domload after line");
});

