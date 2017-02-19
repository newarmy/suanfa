/*
冒泡排序的基本思想是：每次比较两个相邻的元素，如果他们的顺序错误就把他们交换过来。
就如同是一个气泡，一步一步往后“翻滚”，直到最后一位。所以这个排序的方法有一个很好听的名字“冒泡排序”。

例如我们需要将 12 35 99 18 76 这 5 个数进行从大到小进行排序。
既然是从大到小排序也就是说越小的越靠后，你是不是觉得我在说废话，但是这句话很关键(∩_∩)。

如果有 n 个数进行排序，只需将 n-1 个数归位，也就是说要进行 n-1 趟操作。而“每一趟”都需要从第 1 
位开始进行相邻两个数的比较，将较小的一个数放在后面，
比较完毕后向后挪一位继续比较下面两个相邻数的大小，重复此步骤，\
直到最后一个尚未归位的数，已经归位的数则无需再进行比较（已经归位的数你还比较个啥，浪费表情）。


冒泡排序的核心部分是双重嵌套循环。不难看出冒泡排序的时间复杂度是 O(N2)。这是一个非常高的时间复杂度。

冒泡排序可以说是我们学习第一个真正的排序算法，并且解决了桶排序浪费空间的问题，
但在算法的执行效率上却牺牲了很多，它的时间复杂度达到了 O(N2)。
*/


//初始要帽包排序的数据
var target = [], tem;
for (var i = 0; i<10; i++) {
	tem = 10*Math.random();
	console.log(tem);
	target.push(tem);
}
console.log(target);
console.log('------------------------------');
//降序
var tem;
/*for(var i = 0, len = target.length; i < len -1; i++) {
	for(var j = i+1; j < len; j++) {
		if(target[i] < target[j]) {
			tem = target[j];
			target[j] = target[i];
			target[i] = tem;
		}
	}
}*/
for(var i = 0, len = target.length; i < len -1; i++) {
    for(var j = 0; j < len-i; j++) {
		if(target[j] < target[j+1]) {
			tem = target[j+1];
			target[j+1] = target[j];
			target[j] = tem;
		}
	}
}
console.log('desc');
console.log(target);
console.log('------------------------------');
//升序
var tem;
/*
for(var i = 0, len = target.length; i < len -1; i++) {
	for(var j = i+1; j < len; j++) {
		if(target[i] > target[j]) {
			tem = target[j];
			target[j] = target[i];
			target[i] = tem;
		}
	}
}*/
for(var i = 0, len = target.length; i < len -1; i++) {
	for(var j = 0; j < len-i; j++) {
		if(target[j] > target[j+1]) {
			tem = target[j+1];
			target[j+1] = target[j];
			target[j] = tem;
		}
	}
}
console.log('asc');
console.log(target);