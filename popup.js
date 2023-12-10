// Popup script
document.addEventListener("DOMContentLoaded", function () {
  // Do something when the DOM is ready
  // document.getElementById("my-button").addEventListener("click", onClickButton);
  $("#my-button").on("click", onClickButton);
});

// popup.js

function onClickButton() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    console.log(activeTab, '[activeTab]')
    chrome.tabs.sendMessage(activeTab.id, {"message": "changeText"});
  });
}


