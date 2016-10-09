//attr方法,属性相关的 如href id class 之类

//获取元素
console.log($("meta").attr("charset"));

//设置属性
console.log($("meta").attr("charest", "utf-16"));
var i = 0,
	len = $("li").length;
while(i < len){
	$("li").eq(i).attr("name", "test"+i);
	console.log($("li:eq(" + i + ")").attr("name"));
	i++;
}
console.log($("li").attr("name"));

$("input").attr("readonly", "readonly").attr("disabled", "disabled");
console.log($("input").attr("readonly"));
console.log($("input").attr("disabled"));

$("option:eq(1)").attr("selected", "selected");
console.log($("option:eq(1)").attr("selected"));

//prop方法，专用处理disabled，readonly，checked,selected特性
$("input").prop("readonly", "readonly");
console.log($("input").prop("readonly"));
$("option:eq(2)").prop("selected", "selected");

//css方法,样式相关的 如width background 之类

//设置
$("div.b").css("border", "1px solid").css("height", "200px").css({
	backgroundColor : "red",
	"box-shadow" : "0 0 20px 10px white inset"
});

//获取
console.log($("div.b").css("box-shadow"));//返回的已经是一个字符串了,再想获取别的元素，只能另开一个console.log
console.log($("div.b").css("border"));

//添加类，从而添加样式，并不会重复添加同名类
$("p").addClass("blue").addClass("big").addClass("big");

//删除类，从而删除样式
$("p").removeClass("blue");

//切换类（有则删，没有则加），从而切换样式
$("p").toggleClass("blue").toggleClass("blue").toggleClass("blue");

//是否包含类（如果有一个没有，则直接返回false）
console.log($("p").hasClass("big samll"));

$("p")[0].onclick = function(){
	$(this).toggleClass("blue");
};

/* 1 
console.log($("div:contains('John')"));*/