$.fn.extend({
	pagination : function(option){
		var currentIndex = option.index || 0,
			size = option.size || 20,
			total = option.total,
			pageLen = Math.ceil(total / size);
	}
});
$(".pagination").pagination({
	index : 0,
	size : 10,
	total : 500,
	render : function(index){
		console.log(option);
	}
});
