/*
   只有五行的 Floyd 最短路算法
   1, 2, 3三个顶点；两两顶点最短路径
   
   1->2: 12 
   1->3: 3
   2->1: 2
   2->3: 7
   3->1: 3
   3->2: 8
   
   
   通过这种方法我们可以求出任意两个点之间最短路径。
   它的时间复杂度是 O(N3)。令人很震撼的是它竟然只有五行代码，
   实现起来非常容易。正是因为它实现起来非常容易，
   如果时间复杂度要求不高，使用 Floyd-Warshall 来求指定
   两点之间的最短路或者指定一个点到其余各个顶点的最短路径也是可行的
   Floyd-Warshall 算法不能解决带有“负权回路”
   （或者叫“负权环”）的图
*/

var arr=[
 [0, 12, 3],
 [2, 0, 7],
 [3, 8, 0]
];
// Floyd 最短路算法
function floydShortPath(arr) {
	var len = arr.length;
	for(var k = 0; k < len; k++) {//中转点
		for(var i = 0; i < len; i++) {//初始点
			for(var j = 0; j < len; j++) { //终点
				if(arr[i][j] > arr[i][k]+arr[k][j]) {
					arr[i][j] = arr[i][k]+arr[k][j]
				}
			}
		}
	}
	return arr;
}

console.log(arr);
console.log('--------------------------------');
arr = floydShortPath(arr);
console.log(arr);



