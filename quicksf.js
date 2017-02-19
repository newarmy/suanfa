/*
快速排序


快速排序之所比较快，因为相比冒泡排序，每次交换是跳跃式的。每次排序的时候设置一个基准点，
将小于等于基准点的数全部放到基准点的左边，将大于等于基准点的数全部放到基准点的右边。
这样在每次交换的时候就不会像冒泡排序一样每次只能在相邻的数之间进行交换，交换的距离就大的多了。\
因此总的比较和交换次数就少了，速度自然就提高了。当然在最坏的情况下，仍可能是相邻的两个数进行了交换。
因此快速排序的最差时间复杂度和冒泡排序是一样的都是 O(N2)，
它的平均时间复杂度为 O(NlogN)。其实快速排序是基于一种叫做“二分”的思想。
*/


//初始要排序的数据
var target = [11,10,2,7,3,6,12,4,6,55];
console.log(target);
console.log('------------------------------');
//降序
function quickSortDesc(left, right) {
   //console.log(left, right);
	var i, j, base, tem;
	if(left>right) {
       return;
	 }
	base = target[left];//二分法基数
	i = left;
	j = right;
	while(i != j) {
	    ////顺序很重要，要先从右边开始找
		//从右找一个大于base的数据，并且记录位置j
		while(target[j] <= base && i<j) {
			j--;
		}
		//从左找一个小于base的数据，并且记录位置i;
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
	quickSortDesc(left, i-1);//继续处理左边的，这里是一个递归的过程
	quickSortDesc(i+1, right);//继续处理右边的 ，这里是一个递归的过程
}


//降序
quickSortDesc(0, target.length-1);
console.log('desc');
console.log(target);


//升序
function quickSortAsc(left, right) {
	var i, j, base, tem;
	if(left>right) {
       return;
	 }
	base = target[left];//二分法基数
	i = left;
	j = right;
	while(i !=j) {
		//从右找一个小于base的数据，并且记录位置j
		while(target[j] >= base && i<j) {
			j--;
		}
		//从左找一个大于base的数据，并且记录位置i;
		while(target[i] <= base && i<j) {
			i++
		}
		if(i < j) {
			tem = target[j];
			target[j] = target[i];
			target[i] = tem;
		}
	}
	 //最终将基准数归位
	target[left] = target[i];
	target[i] = base;
	quickSortAsc(left, i-1);//继续处理左边的，这里是一个递归的过程
	quickSortAsc(i+1, right);//继续处理右边的 ，这里是一个递归的过程
}

console.log('------------------------------');
//升序

quickSortAsc(0, target.length-1);
console.log('asc');
console.log(target);