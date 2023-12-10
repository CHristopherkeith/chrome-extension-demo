// Popup script
document.addEventListener("DOMContentLoaded", function () {
  // Do something when the DOM is ready
  // document.getElementById("my-button").addEventListener("click", onClickButton);
  $("#my-button").on("click", onClickButton);
});

function onClickButton() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "changeText"});
  });
}


