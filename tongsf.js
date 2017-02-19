//捅算法排序，标记法，  用一个数组（值为0）来标记可能的排序数，那个数出现了，那个数组值加1. 

// 它非常浪费空间！例如需要排序数的范围是 0~2100000000 之间，那你则需要申请 2100000001 个变量，
//如果现在需要排序的不再是整数而是一些小数,就不能排序了

//最终桶排序的时间复杂度为 O(m+n)

//初始一个变量标记数组。
var tagArr = [];
for(var i = 0; i < 10; i++) {  //m
	tagArr.push(0);
}

//标记要排序的数据
var target = [], tem;
for (var i =0; i<10; i++) { //n
	tem = 0;
	tem = parseInt(10*Math.random());
	console.log(tem);
	//标记
	tagArr[tem]++;
}
console.log(tagArr);
console.log('------------------------------');
//输出(从小到大) m+n
for(var i = 0; i < 10; i++) {
	for(var j = 1; j <= tagArr[i]; j++) {
		//被标记几次，都输出几次
		//i就是变量
		console.log(i);
	}
}
console.log('------------------------------');
//输出(从大到小)
for(var i = 9; i >= 0; i--) {
	for(var j = 1; j <= tagArr[i]; j++) {
		//被标记几次，都输出几次
		//i就是变量
		console.log(i);
	}
}