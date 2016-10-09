//trim方法，清除前后空格
console.log($.trim("   adasfdg asf  "));

//
$.map([4, 2, 6, 9, 0, 1], function(item, index){
	console.log(item, index);
	return Math.pow(item - index, 2);
});

//isArray方法,判断是否是数组，返回值true是数组，false不是数组
console.log($.isArray("hh"), $.isArray([1, undefined, 2]), $.isArray(document.body.childNodes));

//contains方法,判断参数二的dom节点是否在参数一dom节点内
console.log($.contains(document.body, $("span")[0]));

//编写工具
$.extend({
	max : function(a, b){
		return Math.max(a, b);
	},
	toStarryTel : function(tel){
		tel = tel + "";
		var len = tel.length;
		return tel.substring(0, 3) +function(){
			var tel1 = "";
			for(var i = 0; i <len - 6; i++){
				tel1 += "*";
			}
			return tel1;
		}() + tel.substring(len - 3);
	},
	validataUser : function(str){
		var a = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
		var i = 0,
			aLen = a.length;
		while(i < alen){
			a.push(a[i++].toUpperCase());
		}
		a = a.concat(["0","1","2","3","4","5","6","7","8","9"]);
		var j = 0,
			strLen = str.length;
		while(j < strLen){
			if(!~a.indexOf(str[j++])){
				return 0;
			}
		}
		return 1;
	}
	
});
/*function check() {
		var name = $("input")[0].value;
		var i = 0,
			len = name.length;
		var temp = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
		for(; i < len;i++){
			if(temp.indexOf(name[i]) == -1 ){
				$("input").css("border-color" , "red");
			}else{
				$("input").css("border-color" , "green");
			}
			}
			if(len == 0){
				$("input").css("border-color", "");
		}
	}

$("input").keyup(check);*/
console.log($.max(10, 20));
console.log($.toStarryTel(12345678901));

// $("input").keyup(function(){
// 	if(!this.value){
// 		$(this).css("outline-color", "");
// 		return;
// 	}
// 	$(this).css("outline-color", $.validataUser(this.value) ? "green" : "red");
// });

//拓展对象字面量
console.log($.extend({
	a : 1
},{
	b : 2,
	c : 3
}));

console.log(Object.assign({
	a : 1
}, {
	b : 2,
	c : 3
}));

//同名工具（属性）会覆盖，甚至会重写jq自带的工具
$.extend({
	max : function(a, b){
		return Math.min(a, b);
	},
	trim : 1
});
console.log($.max(1, 2));
console.log($.trim);

$.abc = function(){
	console.log(this.trim);
};

$.abc();

$.map = 2;
console.log($.map);

//补充fill方法
console.log(new Array(5).fill("*").join(""));

//补充repeat方法
console.log("*".repeat(5));

function People(){
	this.name = "人";
}
People.prototype.age = 20;
var man = new People();
console.log(man.name, man.age);

//$.fn.extend方法
$.fn.extend({
	getHTML : function(){
		return this.html();
	},
	setHTML : function(html){
		this.html(html);
	}
});

// $("body").setHTML("<P>啥啥啥</P>");
// console.log($("body").getHTML());

$.fn.extend({
	validataUser : function(){
		//对象的validate属性被调用，下一行的this指向的
		console.log(this);
		return this.keyup(function(){
			if(!this.value){
				$(this).css("outline-color", "");
				return;
			}
			$(this).css("outline-color", $.validataUser(this.value) ? "green" : "red");
		});
	}
});

$("input").validataUser().css({
	width : "400px",
	height : "40px",
	fontSize : "24px"
});