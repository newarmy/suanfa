/*
ð������Ļ���˼���ǣ�ÿ�αȽ��������ڵ�Ԫ�أ�������ǵ�˳�����Ͱ����ǽ���������
����ͬ��һ�����ݣ�һ��һ�����󡰷�������ֱ�����һλ�������������ķ�����һ���ܺ��������֡�ð�����򡱡�

����������Ҫ�� 12 35 99 18 76 �� 5 �������дӴ�С��������
��Ȼ�ǴӴ�С����Ҳ����˵ԽС��Խ�������ǲ��Ǿ�������˵�ϻ���������仰�ܹؼ�(��_��)��

����� n ������������ֻ�轫 n-1 ������λ��Ҳ����˵Ҫ���� n-1 �˲���������ÿһ�ˡ�����Ҫ�ӵ� 1 
λ��ʼ���������������ıȽϣ�����С��һ�������ں��棬
�Ƚ���Ϻ����Ųһλ�����Ƚ����������������Ĵ�С���ظ��˲��裬\
ֱ�����һ����δ��λ�������Ѿ���λ�����������ٽ��бȽϣ��Ѿ���λ�����㻹�Ƚϸ�ɶ���˷ѱ��飩��


ð������ĺ��Ĳ�����˫��Ƕ��ѭ�������ѿ���ð�������ʱ�临�Ӷ��� O(N2)������һ���ǳ��ߵ�ʱ�临�Ӷȡ�

ð���������˵������ѧϰ��һ�������������㷨�����ҽ����Ͱ�����˷ѿռ�����⣬
�����㷨��ִ��Ч����ȴ�����˺ܶ࣬����ʱ�临�Ӷȴﵽ�� O(N2)��
*/


//��ʼҪñ�����������
var target = [], tem;
for (var i = 0; i<10; i++) {
	tem = 10*Math.random();
	console.log(tem);
	target.push(tem);
}
console.log(target);
console.log('------------------------------');
//����
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
//����
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