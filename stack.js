/*
栈： 后进先出的数据结构它叫做栈。栈限定只能在一端进行插入和删除操作
*/

function stack() {
	var arr = [];
	var top = 0;
	this.push = function (v) {
		arr.push(v);
		top++;
	}
	this.pop = function () {
		top--;
		return arr.pop();
	}
	this.len = function () {
		return top;
	}
}


//判断回文字符串
function checkHuiWen(str) {
	var q = new stack();
	var len = str.length;
	var mpos = 0;
	if(len%2 == 0) {
		mpos = len/2 -1;
		for(var i = 0; i <= mpos; i++) {
			q.push(str.charAt(i));
		}
	} else {
		mpos = Math.floor(len/2);
		for(var i = 0; i < mpos; i++) {
			q.push(str.charAt(i));
		}
	}
	//console.log(q.arr);
	//判断
	for(var i = mpos+1; i < len; i++) {
		if(str.charAt(i) != q.pop()) {
			break;
		}
	}
	if(q.len() == 0) {
		return true;
	} else {
		return false;
	}
	
} 

var res = checkHuiWen('sdaaddaads');
var res1 = checkHuiWen('aadaa');
var res2 = checkHuiWen('aaaddaa');
console.log(res, res1, res2);