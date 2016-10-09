$("input").click(function(){
	var value1 = this.value,
		_this = this;
		this.value = "5秒后重新发送验证码";
		var temp = 5;
		// _this.disabled = true;
		$(this).attr("disabled", true);
	var time1 = setInterval(function(){
		temp--;
		console.log($(this));
		_this.value = temp + "秒后重新发送验证码";
		if(temp == 0){
			clearInterval(time1);
			_this.value = value1;
			// _this.disabled = false;
			$(_this).attr("disabled", false);
		}
	}, 1000);
});