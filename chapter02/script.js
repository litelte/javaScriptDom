/*
    简单练习一下数据类型的创建
*/
// 给变量赋值
mood = "happy";
age = 33;
// 运行后会输出mood的值
// alert(mood);
// 创建一个数组
var beatles = Array(4);
// 有时候不知道数组到底有多少
var beatles2 = Array();
// 数组的填充
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";
// 创建对象
var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;
// 甚至可以使用二维数组，数组中嵌套数组
beatles2[0] = lennon;
// 也可以直接创建一个对象，然后再对象嵌套对象
var beatles3 = {};
beatles3.vocalist = lennon;
