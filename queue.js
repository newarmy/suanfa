/*
队列是一种特殊的线性结构，它只允许在队列的首部（head）进行删除操作称之为“出队”，
而在队列的尾部（tail）进行插入操作称之为“入队”。当队列中没有元素时（即 head==tail），
称为空队列。在我们的日常生活中有很多情况都符合队列的特性。比如我们之前提到过的买票，
每个排队买票的窗口就是一个队列。在这个队列当中，新来的人总是站在队列的最后面，
来的越早的人越靠前也就越早能买到票，就是先来的人先服务，
我们称为“先进先出”（First InFirst Out，FIFO）原则
*/

function queue() {
	this.arr = new Array(100);
	this.head = 0;
	this.tail = 0;
}




function decodeFunc(arr) {
	var q = new queue();
	arr.forEach(function (e,i) {
		//console.log(e, i);
		q.arr[i] = e;
	});
	q.tail = arr.length;
	var array = [];
	while(q.head < q.tail) {
		array.push(q.arr[q.head]);
		q.head++;
		q.arr[q.tail] = q.arr[q.head];
		q.tail++;
		q.head++;
	}
	return array;
} 
console.log([9,2,3,5,6]);
var res = decodeFunc([9,2,3,5,6]);
console.log(res);