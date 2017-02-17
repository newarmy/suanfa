/*
   ֻ�����е� Floyd ���·�㷨
   1, 2, 3�������㣻�����������·��
   
   1->2: 12 
   1->3: 3
   2->1: 2
   2->3: 7
   3->1: 3
   3->2: 8
   
   
   ͨ�����ַ������ǿ����������������֮�����·����
   ����ʱ�临�Ӷ��� O(N3)�����˺��𺳵�������Ȼֻ�����д��룬
   ʵ�������ǳ����ס�������Ϊ��ʵ�������ǳ����ף�
   ���ʱ�临�Ӷ�Ҫ�󲻸ߣ�ʹ�� Floyd-Warshall ����ָ��
   ����֮������·����ָ��һ���㵽���������������·��Ҳ�ǿ��е�
   Floyd-Warshall �㷨���ܽ�����С���Ȩ��·��
   �����߽С���Ȩ��������ͼ
*/

var arr=[
 [0, 12, 3],
 [2, 0, 7],
 [3, 8, 0]
];
// Floyd ���·�㷨
function floydShortPath(arr) {
	var len = arr.length;
	for(var k = 0; k < len; k++) {//��ת��
		for(var i = 0; i < len; i++) {//��ʼ��
			for(var j = 0; j < len; j++) { //�յ�
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



