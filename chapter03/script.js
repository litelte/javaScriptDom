// 获取和设置属性,标准的写法就是下面的
// Object.getAttribute(getAttribute);
// 使用循环套这个获得属性
var paras = document.getElementsByTagName("p");
for (var index = 0; index < paras.length; index++) {
  alert(paras[index].getAttribute("title"));
}
// 还可以添加一个if语句来判断获取的属性值是否为空
// 下一个方法是setAttribute
