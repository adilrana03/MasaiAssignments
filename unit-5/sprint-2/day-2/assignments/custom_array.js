function customArray(arr) {
	this.arr = arr;
	this.size = arr.length;
}
var arr1 = new customArray([1, 2, 3, 4, 5]);
var arr2 = new customArray([1, 2, 3]);
// push
customArray.prototype.push = function (data) {
	var len = this.size;
	this.arr[len] = data;
	this.size = len + 1;
};
arr1.push(6);
// pop
customArray.prototype.pop = function () {
	var len = this.size;
	this.arr.splice(this.size - 1, 1);
	this.size -= len;
};
arr2.pop();
//top
customArray.prototype.top = function () {
	console.log(this.arr[this.size - 1]);
};
arr1.top();

//size
customArray.prototype.arrSize = function () {
	console.log(`size of the array is ${this.size}`);
};
arr1.arrSize();
// arr2.arrSize();
//printReverse
customArray.prototype.reverse = function () {
	var reverseArr = [];
	for (var i = this.size - 1; i >= 0; i--) {
		reverseArr.push(this.arr[i]);
	}
	return reverseArr;
};
var obj = arr1.reverse();
console.log(obj);
arr1.reverse();

//print
customArray.prototype.print = function () {
	console.log(this.arr);
};
arr1.print();
arr2.print();
