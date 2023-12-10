// content.js

// 在页面加载完成后执行的函数
function onPageLoad() {
  console.log($)
  // 在这里进行页面元素的操作
  // $("#my-page").text("hello world1")
}

// 监听页面加载完成事件
window.addEventListener("load", onPageLoad);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "changeText") {
    // 在这里执行content script的操作
    // alert("Message received in content script!");
    $("#my-page").text("hello world1");
  }
});