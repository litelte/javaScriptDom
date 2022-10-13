// 事件处理函数
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
}
// 统一遵循event = "JavaScript statement(s)"
onclick = "showPic(this); return false;";
// 下来对这个函数进行扩展，见script1.js
