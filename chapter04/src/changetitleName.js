// 改变显示图片的名字
function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  var text = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  // 下来使用DOM提供的nodeValue属性，得到一个节点的值
  description.firstChild.nodeValue = text;
}
