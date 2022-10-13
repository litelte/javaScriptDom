function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
}
onclick = "showPic(this); return false;";
// 获得body中全体子元素的个数
function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  // alert(body_element.childNodes.length);
  // 获取节点的nodeType属性
  alert(body_element.nodeType);
}
window.onload = countBodyChildren;
/*
实际的运行结果显示，body中的标签数量为21，而body元素应该有4个子元素，一个h1，一个ul，一个img，一个p
原因是文档树的节点类型并非只有元素节点一种
*/
