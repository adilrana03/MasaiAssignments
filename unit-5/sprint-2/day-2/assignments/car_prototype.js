function fourwheeler(brand, kmph, feature, model) {
	this.brand = brand;
	this.kmph = kmph;
	this.feature = feature;
	this.model = model;
}
fourwheeler.prototype.Display = function () {
	return 'Brand Name: ' + this.brand + ' Speed: ' + this.kmph + 'feature: ' + this.feature;
};

var cars = new fourwheeler('Tata', '230', 'automatic', 'LDI');
cars.prototype = Object.create(fourwheeler.prototype);
console.log(cars);
