//html方法
console.log($("body").html());
$("body").html("<p>666<a>23333</a></p>");

//textff,类似innerText
//获取
console.log($("body").text());
//设置
$("body").text("<p>26545413</p>");

//append方法,向子级的最后添加文本或字符串形式的标签或dom对象
$("body").append("&lt;A&gt;刚刚&lt;a&gt;").append("<a>哈哈</a>").prepend(document.createElement("p");

//appendTo方法,append的被动形式
$("<b>666</b>").appendTo("html > body" /*选择器*/);

//prepend方法，向子级的最前面添加文本或字符串形式的标签或dom对象
$("body").prepend("<cf>999</cf>").prepend("&lt;A&gt;刚刚&lt;a&gt;").prepend(document.createElement("p"));

//prependTo,prepend的被动形式
$("<cf>888</cf>").prependTo("html > body");

//after,为被选中的每一个标签后添加一个文本或标签
$("cf").after("after");

//before,为被选中的每一个标签后添加一个文本或标签
$("cf").before("before");

//如果第二个参数传入整个jq选择器中，则会剪切这个标签，黏贴到每一个目标标签中
//所有的jq对dom的操作都拥有此特性
$("cf").append($("b"));
$("a").append($("cf"));

console.log($(document.body));

console.log($(document.body).text());

//clone方法，创建一份拷贝
$("body").append($("ul").clone().empty());

// 下面的不太常用了
/*//remove方法，删除标签内部及自身
$("a b").remove();

//empty方法，清空标签内部的所有标签
$("body").empty();

//包装
$("p").wrap($("a"));*/