/*
������һ����������Խṹ����ֻ�����ڶ��е��ײ���head������ɾ��������֮Ϊ�����ӡ���
���ڶ��е�β����tail�����в��������֮Ϊ����ӡ�����������û��Ԫ��ʱ���� head==tail����
��Ϊ�ն��С������ǵ��ճ��������кܶ���������϶��е����ԡ���������֮ǰ�ᵽ������Ʊ��
ÿ���Ŷ���Ʊ�Ĵ��ھ���һ�����С���������е��У�������������վ�ڶ��е�����棬
����Խ�����Խ��ǰҲ��Խ������Ʊ���������������ȷ���
���ǳ�Ϊ���Ƚ��ȳ�����First InFirst Out��FIFO��ԭ��
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