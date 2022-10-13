// 这里旨在使用非dom的方案解决用户点击图片链接直接预览而不是跳转页面
/*
    setAttribute方法是第1级DOM的组成部分，它可以设置任意元素节点的任意属性。
    在第一级DOM出现之前，可以通过另一种方法设置大部分元素的属性
*/
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
}
// 统一遵循event = "JavaScript statement(s)"
// 需要在图片链接中加入这些内容
// onclick = "showPic(this); return false;";
// 下来对这个函数进行扩展，见countBodyChild.js
