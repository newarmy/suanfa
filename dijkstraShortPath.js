/*
   Dijkstra ���·�㷨
   ������������ָ��һ���㣨Դ�㣩�����������������·����Ҳ��������Դ���·����;
   ����㷨��ʱ�临�Ӷ��� O(N2);
   n�����㣬m��·��
*/

var arr=[
 [0, 12, 5,78],
 [2, 0, 17, 23],
 [3, 1, 0, 3],
 [6, 2, 12, 0]
];
//  Dijkstra ���·�㷨
//  ��initPos���㵽������������·����0��ʾ��һ�����㣩
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



