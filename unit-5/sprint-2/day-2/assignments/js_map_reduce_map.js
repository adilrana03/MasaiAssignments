//map
let arr = new Array(1, 2, 3, 4, 5);
Array.prototype.myMap = function (cb) {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		arr.push(cb(this[i]));
	}
	return arr;
};

let newArray = arr.myMap(function (e) {
	return e * 2;
});
console.log(newArray);

//forEach
Array.prototype.myForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		cb(this[i]);
	}
};
function callback(e) {
	console.log(e);
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach(callback);

//filter
Array.prototype.myFilter = function (cb) {
	let arr2 = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			arr2.push(this[i]);
		}
	}
	return arr2;
};
var array = [1, 2, 3];
let filterArr = array.myFilter(val => val < 3);
console.log(filterArr);

//reduce
Array.prototype.myReduce = function (callback) {
	var a = 0;
	for (let i = 0; i < this.length; i++) {
		callback((a = a + this[i]));
	}
	return a;
};

var reduceArr = [1, 2, 3, 3];
var ans = reduceArr.myReduce((h1, h2) => {
	return h1 + h2;
});
console.log(ans);
