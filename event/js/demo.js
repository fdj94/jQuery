//普通事件
$("li").click(function(){
	console.log(123);
});
$("li:nth-child(even)").mouseenter(function(){ //偶数
	console.log("enter even");
}).next().mouseenter(function(){  //奇数
	console.log("enter odd");
});
/*$("li:nth-child(odd)").mouseenter(function(){
	console.log("enter odd");
});*/

$(window).scroll(function(){
	console.log("scroll");
}).resize(function(){
	console.log("resize");
}).click(function(){
	$(this);  //被$包围,表明指向之前同样被$包围的对象
	$(document.body).css("background-color", "red");
}).click(function(){ //事件重载，可以同时被触发
	console.log("click1");
});

//事件重写
onclick = function(){
	console.log(123);
};
onclick = function(){
	console.log(321);
};

//事件重载
window.addEventListener("click", function(){
	console.log(12366);
}, 0);
window.addEventListener("click", function(){
	console.log(32199);
}, 0);

//on事件，事件也会重载
$("p").on("click", function(){
	console.log(12323);
}).on("click", function(){
	console.log(32123);
}).on("click", function(){
	console.log(this.innerHTML, $(this).html());
});

//！！！后添加到页面里的元素是不会拥有前面添加过的对应事件监听！！！
$("body").append("<p>7477777</p>");

setTimeout(function(){
	$("body").append("<a>呵呵呵</a>");
}, 2000);
$("a").click(function(){
	console.log($(this).text());
}); //当上面的代码生效时，呵呵呵还没出来。所以没有效果
setTimeout(function(){
$("<a>呵呵呵</a>").click(function(){
	console.log($(this).text() + 2);
}).appendTo("body");
}, 200);


//事件触发，此标签的事件只能被其父级的父级及以上所代理，不能被兄弟或子级代理
$("body").delegate("a", "click", function(){
	//this指向触发事件的这个标签的dom对象（a）
	console.log($(this).html() + 1);
});

//触发一次，移除时只触发过的这个标签上的事件，不会全部移除
$("p").one("click", function(){
	console.log($(this).text());
});