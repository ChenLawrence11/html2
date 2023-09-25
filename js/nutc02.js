// 抓取所有li元素
const list = document.querySelectorAll("li");

// 為每一個li元素加上事件
for (let i = 0; i < list.length; i++) {
  // 綁定滑鼠移過的事件
  list[i].addEventListener("mouseover", function () {
    onListShow(i);
  });

  // 綁定滑鼠離開的事件
  list[i].addEventListener("mouseout", function () {
    onListhide(i);
  });
}

// 控制第二層li的選單樣式變為顯示
function onListShow(index) {
  // 先判斷該li選單是否有子節點ul元素，如果有，則顯示子節點ul元素
  if (list[index].querySelector("ul"))
    // children[]:取得當前標籤的子節點
    list[index].children[0].style.display = "block";
}

// 控制第二層li的選單樣式變為隱藏
function onListhide(index) {
  // 先判斷該清單是否有子節點ul元素，如果有，則顯示子節點ul元素
  if (list[index].querySelector("ul"))
    // children[]:取得當前標籤的子節點
    list[index].children[0].style.display = "none";
}
