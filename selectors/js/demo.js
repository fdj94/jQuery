//同querySelectorAll一样
console.log($("li:not(:last-child) + li"));

//选择方法

//eq方法，索引
console.log($(".l").eq(3));
//返回一个DOM对象，就可以对该DOM标签的style等属性进行操作
console.log($(".l").eq(3)[0]);

console.log($(".l:eq(3)"));

console.log($("ul .l:eq(3)").eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0));//链式调用

function People() {
	this.walk = function(){
		console.log("walk");
		return this;
	};
	this.run = function(){
		console.log("run");
		return this;
	};
	this.laugh = function(){
		console.log("laugh");
		return this;
	};
}
console.log(new People().walk().laugh().run().laugh().walk().run().laugh());

//find方法,查找子级，可以跨越层级查找
console.log("--------------find------------");
console.log($("body").find(/*筛选条件 空的为0*/));
console.log($("body").find("ul").find("span"));

//children方法，查找直接子级.跨子级查找 并不行
console.log("--------------children------------");
console.log($("body").children(/*筛选条件 空的为全部*/));
console.log($("body").children("ul").find("li"));

//siblings方法,查找同一级兄弟
console.log("--------------siblings------------");
console.log($("body").siblings(/*筛选条件 空的为全部*/));
console.log($("li").siblings(".d"));
console.log($("li").siblings());

//prev方法,查找前一个兄弟（同一级的）标签（如果有同一个class名多次存在，则会全部查找出来）
console.log("--------------prev------------");
console.log($(".b").prev(/*筛选条件*/));

//prevAll方法,查找前面所有的兄弟（同一级的）标签
console.log("--------------prevAll------------");
console.log($(".c").prevAll(/*筛选条件*/));

//next方法,查找后一个兄弟（同一级的）标签（如果有同一个class名多次存在，则会全部查找出来）
console.log("--------------next------------");
console.log($(".b").next(/*筛选条件*/));

//nextAll方法,查找后面所有的兄弟（同一级的）标签
console.log("--------------nextAll------------");
console.log($(".c").nextAll(/*筛选条件*/));

//parent方法，查找当前标签的直接父级标签
console.log("--------------parent------------");
console.log($(".b").parent(/*筛选条件*/));

//综合使用
// console.log($(".c").find().)；