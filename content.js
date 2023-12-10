// content.js

// 在页面加载完成后执行的函数
function onPageLoad() {
  // console.log($)
  // 在这里进行页面元素的操作
  // $("#my-page").text("hello world1")
  var button = $("<button/>", {
    text: "清空关键词", // 按钮显示的文本
    id: "clearBtn", // 按钮的ID
    style:
      "position: fixed;z-index: 999;top: 0;left:800px;width: 80px;height: 30px;background-color: orange;",
    click: async function () {
      $("#clearBtn").text("操作中...");
      $("#clearBtn").prop("disabled", true);
      console.log("xxxx");
      // 关键词
      // const tableWordEle = $(
      //   ".border-radius.hidden-x.scroll-y.bt-e6.bb-e6.br-e6.bl-e6.flex-6.h400"
      // );
      // $($(tableWordEle.children()[0].children[0]).find("th").children()[0])
      //   .find("input")[0]
      //   .click();
      // // 词包
      // const tableWordPkgEle = $(
      //   ".border-radius.hidden-x.scroll-y.bt-e6.bb-e6.br-e6.bl-e6.flex-5.h400.mr16"
      // );
      // $($(tableWordPkgEle.children()[0].children[0]).find("th").children()[0])
      //   .find("input")[0]
      //   .click();
      const carouselEle = $('div[data-carousel="true"]');
      const dataCardEle = carouselEle.find("div[data-card]");
      for (let i = 0; i < dataCardEle.length; i++) {
        $(dataCardEle[i]).click();
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 700);
        });
        const tableWordEle = $(
          ".border-radius.hidden-x.scroll-y.bt-e6.bb-e6.br-e6.bl-e6.flex-6.h400"
        );
        $($(tableWordEle.children()[0].children[0]).find("th").children()[0])
          .find("input")[0]
          .click();
        // 词包
        const tableWordPkgEle = $(
          ".border-radius.hidden-x.scroll-y.bt-e6.bb-e6.br-e6.bl-e6.flex-5.h400.mr16"
        );
        $($(tableWordPkgEle.children()[0].children[0]).find("th").children()[0])
          .find("input")[0]
          .click();
        // await new Promise((resolve, reject) => {
        //   setTimeout(resolve, 100);
        // });
        // setTimeout(() => {
        //   $(dataCardEle[i]).click();
        // }, 1000);
      }
      $("#clearBtn").prop("disabled", false);
      $("#clearBtn").text("清空关键词");
      // alert("操作完毕");
    },
  });

  // 将按钮添加到页面顶部
  $("html").append(button);
}

// 监听页面加载完成事件
window.addEventListener("load", onPageLoad);

// content.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "changeText") {
    // 在这里执行content script的操作
    // alert("Message received in content script!");
    // $("#my-page").text("hello world1");
    // const tableWordEle = $(".border-radius.hidden-x.scroll-y.bt-e6.bb-e6.br-e6.bl-e6.flex-6.h400");
    // $($(tableWordEle.children()[0].children[0]).find("th").children()[0]).find("input")[0].click();
    // console.log(tableWordEle, '[tableWordEle]');
    console.log("66666");
  }
});
