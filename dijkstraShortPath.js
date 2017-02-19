/*
   Dijkstra 最短路算法
   本周来来介绍指定一个点（源点）到其余各个顶点的最短路径，也叫做“单源最短路径”;
   这个算法的时间复杂度是 O(N2);
   n个顶点，m个路径
*/

var arr=[
 [0, 12, 5,78],
 [2, 0, 17, 23],
 [3, 1, 0, 3],
 [6, 2, 12, 0]
];
//  Dijkstra 最短路算法
//  从initPos顶点到其他顶点的最短路径（0表示第一个顶点）
function dijkstraShortPath(arr, initPos) {
	var book = [];
	var initPathArr = [], len, min = 1000, minPos;
	initPos = initPos || 0;
	 initPathArr = arr[initPos];
	 console.log(initPathArr);
	 //var max = 1000; initShortPos = 0;
	 initPathArr.forEach(function (e, i) {
		if(i == initPos) {
			book.push(1);
		} else {
			book.push(0);
		}
	 });
	 len = initPathArr.length;
	for(var i=0; i < len-1; i++ ) {
		for(var j = 0; j < len; j++) {
			if( book[j] == 0  && initPathArr[j] < min) {
				min = initPathArr[j];
				minPos = j;
			}
		}
		book[minPos] = 1;
		
		for(var x =0; x < len; x++) {
			if(initPathArr[x] > initPathArr[minPos]+ arr[minPos][x]) {
				initPathArr[x] = initPathArr[minPos]+ arr[minPos][x];
			}
		}
	}
	return initPathArr;
}

//console.log(arr);

arr = dijkstraShortPath(arr, 1);
console.log('--------------------------------');
console.log(arr);



