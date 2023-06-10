// Write code related to Calender page here
var Data = JSON.parse(localStorage.getItem('meets')) || [];

console.log(Data);
var month = document.getElementById('month');
var currmonth = month.value;

displayData(Data);

month.onchange = () => {
	currmonth = month.value;
	displayData(Data);
};
function displayData(data) {
	let w1 = document.getElementById('w1');
	let w2 = document.getElementById('w2');
	let w3 = document.getElementById('w3');
	let w4 = document.getElementById('w4');

	w1.innerHTML = '';
	w2.innerText = '';
	w3.innerText = '';
	w4.innerText = '';
	data.map(function (e, i) {
		console.log('Display data is working');
		console.log(e.month);
		console.log(currmonth);
		if (e.month == currmonth) {
			let name = document.createElement('p');
			name.innerText = e.name;

			let para = document.createElement('p');
			para.innerText = e.discription;

			let type = document.createElement('p');
			type.innerText = e.meettype;

			let select = document.createElement('select');
			let opt1 = document.createElement('option');
			opt1.innerText = 'Week-1';
			let opt2 = document.createElement('option');
			opt2.innerText = 'Week-1';
			let opt3 = document.createElement('option');
			opt3.innerText = 'Week-1';
			let opt4 = document.createElement('option');
			opt4.innerText = 'Week-1';
			select.append(opt1, opt2, opt3, opt4);
			let btn = document.createElement('button');
			btn.innerText = 'Delete';
			btn.style.background = 'Red';
			btn.style.color = 'white';

			btn.addEventListener('click', function () {
				del(i);
			});

			if (e.week === 'Week-1') {
				w1.append(name, para, type, select, btn);
			} else if (e.week === 'Week-2') {
				w2.append(name, para, type, select, btn);
			} else if (e.week === 'Week-3') {
				w3.append(name, para, type, select, btn);
			} else {
				w4.append(name, para, type, select, btn);
			}
		}
	});
}
function del(i) {
	Data.splice(i, 1);
	localStorage.setItem('meets', JSON.stringify(Data));
	displayData(Data);
}
