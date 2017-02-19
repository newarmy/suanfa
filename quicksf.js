/*
��������


��������֮���ȽϿ죬��Ϊ���ð������ÿ�ν�������Ծʽ�ġ�ÿ�������ʱ������һ����׼�㣬
��С�ڵ��ڻ�׼�����ȫ���ŵ���׼�����ߣ������ڵ��ڻ�׼�����ȫ���ŵ���׼����ұߡ�
������ÿ�ν�����ʱ��Ͳ�����ð������һ��ÿ��ֻ�������ڵ���֮����н����������ľ���ʹ�Ķ��ˡ�\
����ܵıȽϺͽ������������ˣ��ٶ���Ȼ������ˡ���Ȼ���������£��Կ��������ڵ������������˽�����
��˿�����������ʱ�临�ӶȺ�ð��������һ���Ķ��� O(N2)��
����ƽ��ʱ�临�Ӷ�Ϊ O(NlogN)����ʵ���������ǻ���һ�ֽ��������֡���˼�롣
*/


//��ʼҪ���������
var target = [11,10,2,7,3,6,12,4,6,55];
console.log(target);
console.log('------------------------------');
//����
function quickSortDesc(left, right) {
   //console.log(left, right);
	var i, j, base, tem;
	if(left>right) {
       return;
	 }
	base = target[left];//���ַ�����
	i = left;
	j = right;
	while(i != j) {
	    ////˳�����Ҫ��Ҫ�ȴ��ұ߿�ʼ��
		//������һ������base�����ݣ����Ҽ�¼λ��j
		while(target[j] <= base && i<j) {
			j--;
		}
		//������һ��С��base�����ݣ����Ҽ�¼λ��i;
		while(target[i] >= base && i<j) {
			i++;
		}
		if(i < j) {
			tem = target[j];
			target[j] = target[i];
			target[i] = tem;
		}
	}
	target[left] = target[i];
	target[i] = base;
	quickSortDesc(left, i-1);//����������ߵģ�������һ���ݹ�Ĺ���
	quickSortDesc(i+1, right);//���������ұߵ� ��������һ���ݹ�Ĺ���
}


//����
quickSortDesc(0, target.length-1);
console.log('desc');
console.log(target);


//����
function quickSortAsc(left, right) {
	var i, j, base, tem;
	if(left>right) {
       return;
	 }
	base = target[left];//���ַ�����
	i = left;
	j = right;
	while(i !=j) {
		//������һ��С��base�����ݣ����Ҽ�¼λ��j
		while(target[j] >= base && i<j) {
			j--;
		}
		//������һ������base�����ݣ����Ҽ�¼λ��i;
		while(target[i] <= base && i<j) {
			i++
		}
		if(i < j) {
			tem = target[j];
			target[j] = target[i];
			target[i] = tem;
		}
	}
	 //���ս���׼����λ
	target[left] = target[i];
	target[i] = base;
	quickSortAsc(left, i-1);//����������ߵģ�������һ���ݹ�Ĺ���
	quickSortAsc(i+1, right);//���������ұߵ� ��������һ���ݹ�Ĺ���
}

console.log('------------------------------');
//����

quickSortAsc(0, target.length-1);
console.log('asc');
console.log(target);