// $.fn.extend({
// 	btnUp : function(count){
// 		console.log(1);
// 		count--;
// 		$(".content").css({left  : -count*36 + " px "});
// 		console.log(2);
// 		return count;
// 	},
// 	btnDown : function(count){
// 		console.log(1);
// 		count++;
// 		$(".content").css({left :  count*36 + " px "});
// 		console.log(2);
// 		return count;
// 	},
// 	click1 : function(count){
// 		$(this).btnUp(count);
// 	},
// 	click2 : function(count){
// 		$(this).btnDown(count);
// 	}
// });
console.log(1);
var count = 0,
	_up = $(".upOne"),
	_down = $(".downOne");
	_up.css("display","none");
_up.click(
	function(count){
		console.log(1);
		count--;
		$(".content").css("left",(-count)*36+"px");
		console.log(2);
		if(count === 0){
			_up.css("display","none");
		}else if(count >= 16){
			_down.css("display","none");
		}
		return count;
	});
_down.click(
	function(count){
		console.log(3);
		count++;
		$(".content").css("left",count*36+"px");
		console.log(4);
		if(count === 0){
			_up.css("display","none");
		}else if(count >= 16){
			_down.css("display","none");
		}
		return count;
	});

