$(".projectName").keyup(function(){
	 var aaa;
	 aaa = ~$(this).val().indexOf(" ") || ~$(this).val().indexOf("\t");
	 console.log("aaa");
});
$(".wantMoney").keyup(function(){
	console.log(/[^\d]/g.test($(this).val()));
});

//正则表达式
//Regular Expression
//RegExp

//正则表达式的字面量
var reg1 = /a/;

//实例化正则对象
var reg2 = new RegExp("a");

//字符串的正则匹配方法search

//类似indexOf,但是参数可接收正则表达式，返回值是正则表达式匹配到的下标
console.log("\tcat".search(reg1));

//字符串的replace方法第一个参数也能接收正则表达式，替换被正则匹配到的内容
console.log("cat".replace(reg2, "u"));

//字符串的split方法 参数也能接收正则表达式，根据正则表达式的规则进行字符串切割
console.log("\tcat".split(reg2));

//字符串的match方法，返回匹配到的字符串部分的集合
console.log("\tcat".match(reg1));

//正则对象的匹配方法

//test方法去检测字符串是否有匹配到正则表达式，返回值为boolean
console.log(reg1.test());
console.log(reg1.test("\tcat"));

//正则表达式规则

console.log(/asdf/.test("asdfasd"));

//标识符

//i
//即ignore case不区分大小写
console.log(/asdf/i.test("ASDF"));

//g
//即global匹配所有
console.log("asdasdfasdasdfasd".match(/asdf/g));

console.log("asdaSdFasdAsdfasdasdf".match(/asdf/ig));

//特殊元字符

//\t匹配制表符，即tab
console.log("asdasdfasd 	asdfasd".match(/\t/));

//\r
//即return匹配回车符
console.log("asdfd\rdfsdfsd".match(/\r/));

//n
//即newline匹配空格即制表符及换行符
console.log("aasdsdas\ndsfdsfsf".match(/\n/));

//
//\s
//space即匹配空格即制表符
console.log("---------------------\\s----------------------");
console.log("asd  asd  fasd asdf \r asd".match(/\s/g));
console.log("asd  asd  fasd asdf \r asd".match(/\S/g));

//\d
//即digital匹配到0到9的数字
console.log("---------------------\\d----------------------");
console.log("12345asdf-=12344".match(/\d/g));
console.log("12345asdf-=12344".match(/\D/g));

//\w
//即word匹配0到9的数字及大小写英文字母及下划线
console.log("---------------------\\w----------------------");
console.log("a234s54as!AD&Fs%dsS+ -Fd_@ad".match(/\w/g));
console.log("a234s54as!AD&Fs%dsS+ -Fd_@ad".match(/\W/g));

//\b
//即block匹配单词边界
console.log("---------------------\\b----------------------");
console.log("inter nationlization"/*i18n网站国际化*/.match(/inter\b/));
console.log("inter nationlization"/*i18n网站国际化*/.match(/inter\B/));

//.
//匹配所有
console.log("mysdfdjsfhskjf5453sdkfjhfkldshlf\r\d\w)#%$^)(".match(/./g));

//\转义
//()[].\/?+*^${}
console.log("()".match(/\(\)/g));
console.log("{}".match(/{}/g));

console.log("\\b".match(/\\b/));

//中括号区间
//中括号里的0123即0或1或2或3
console.log("0546511318541210".match(/[0123]/g));

//0-5即0到5
console.log("04250204154023".match(/[0-5]/g));

//a-z即a到z
console.log("asfsd24zdcDFSAasd".match(/[a-z]/g));

//A-Z即A到Z
console.log("asfsd24zdcDFSAasd".match(/[A-Z]/g));

//a-zA-Z即a到z及A到Z
console.log("asfsd24zdcDFSAasd".match(/[a-zA-Z]/g));

//中括号里的asdf即a或s或d或f
console.log("asdf)^%(dsSDf85$9A".match(/[asdf]/g));

console.log("asdf)^%(dsSDf85$9A".match(/[\d]/g));

console.log("asdf  )^%\t(dsSDf85$9A".match(/[\w]/g));

console.log("asdf  )^%(\tdsSDf85$9A".match(/[\w\s]/g));

//注意区别，无中括号的是一个整体，有中括号的是或的关系
console.log("asdf  )^%(95\tdsSDf85$9A".match(/\s\w/g));

// ^ 对中括号内规则的取反
console.log(/[^\d]/g.test("1341df33df"));

//数量级
//单独使用时表示数量级尽量多得去匹配（贪婪）
//在数量级后添加?一同使用时（知足）

//*匹配前一个规则任意次，*不能单独使用，*可以和任意标识符（w、d之类）使用
//如果这个规则匹配到了0次，也会算匹配到，匹配到内容为""
console.log("123".match(/\d*/));
console.log("asd3254)(s*^(".match(/\d*/g)); //匹配\d之后的空白字符串任意次
console.log("asd3254)(s*^(".match(/[\d*]/g)); //匹配\d或者*的东西

//?匹配前一个规则0次或1次
console.log("123".match(/\d?/g)); 

//+匹配前一个规则至少1次
console.log("123sadada123213".match(/\d+/));
console.log("123sadada123213".match(/\d+/g));
console.log("123sadada123213".match(/\d/g));
console.log("fsfsdf".match(/\d+/g));
console.log("123sadada123213".match(/\d+$/));

//{}自定义匹配前一个规则的次数
//{2, 3} 即匹配2次到3次
console.log("133da65412s1ads987456ad12".match(/\d{2,3}/g)); //如中间的1 只有一个数字就不采用

//{m}匹配前一个规则m次
console.log("133da65412s1ads987456ad12".match(/\d{2}/g)); 
console.log("133da65412s1ads987456ad12".match(/\d{2}?/g)); //无意义

//{m,}匹配前一个规则至少m次
console.log("133da65412s1ads987456ad12".match(/\d{2,}/g));
console.log("133da65412s1ads987456ad12".match(/\d{2,}?/g));//同{3}

//{0,m}匹配前一个规则最m多
console.log("133da65412s1ads987456ad12".match(/\d{0,3}/g));
console.log("133da65412s1ads987456ad12".match(/\d{0,3}?/g));//同{0}

//{m,n}匹配到前一个规则的次数，匹配到前一个规则m次到n次
console.log("133da65412s1ads987456ad12".match(/\d{2,3}/g));
console.log("133da65412s1ads987456ad12".match(/\d{2,3}?/g));//同{2}

//非中括号里的^以后面的规则由字符串开始
console.log("123123".match(/^\d/));
console.log("df12sfsd3123".match(/^\d/)); //因为数字没有在字符串的开始，所以是null
console.log("123sdfsad123".match(/^\d/));

//$以前面的规则由字符串结束
console.log("123123".match(/\d$/));
console.log("123sfdd".match(/\d$/));
console.log("123fghf124".match(/\d+$/));

//手机号匹配
//第一位为1，第二位不能是0469，第三位及之后没影响
console.log(/^1[^0-2469]\d{9}$/.test("17345678901")); //不是0 - 2469,正则表达式按单个字符计算规则

//()表示分组
console.log("asdfasd1d2d3#$%^asd8d7d5".match(/as(d\d)+/g));

//|表示或者
console.log("asdfasd1d2d3#$%^asd8d7d5".match(/[a-d]|\d/g));

//小括号里使用?:可以取消引用,对不必要的小括号引用加上?:可以提高正则表达式的运算效率
console.log(/^(1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[1-2])\d{4}(19\d{2}|20(0\d|1[0-5]))(0[1-9]|1[1-2])\d{5}(\d|X)$/.test("332521196902060091"));
console.log(("332521196902060091").match(/^(1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[1-2])\d{4}(19\d{2}|20(0\d|1[0-5]))(0[1-9]|1[1-2])\d{5}(\d|X)$/));
console.log(("332521196902060091").match(/^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[1-2])\d{4}(?:19\d{2}|20(?:0\d|1[0-5]))(?:0[1-9]|1[1-2])\d{5}(?:\d|X)$/));

//replace方法中第一个参数如果是正则，有存在分组，则第二个参数可以通过$n使用对应的分组，比如$1找到第一个小括号里匹配到的内容
console.log("asdf1236asdf".replace(/(\w\d)/, "6$16"));

//正则表达式中使用\n可以获取到前面被小括号分组匹配到的内容，比如\1找到第一个小括号里匹配到的内容
console.log("asdf123asdf".match(/(asdf)123\1/));
console.log("asdf123\1asdf".match(/(?:asdf)123\1/));

//匹配标签
console.log(/^<([a-z]+[a-z\d]*)[^>]*>.*<\/\1>$/.test("<div>233</div>"));

//前瞻(对光标右侧的内容进行判定)
//?=肯定前瞻
//?!否定前瞻
//前瞻判定并不会跳过该匹配内容
console.log("asdf123asdf".match(/asdf(?=\d123)/));
console.log("asdf123asdf".match(/asdf(?!\d)123/));
console.log("asdf123asdf".match(/asdf(?!\d)/));