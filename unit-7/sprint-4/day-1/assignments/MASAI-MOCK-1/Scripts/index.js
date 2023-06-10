// Write code related to Home page here
document.querySelector('form').addEventListener('submit', handleform);

var Data = JSON.parse(localStorage.getItem("meets")) || [];
function handleform() {
	event.preventDefault();
	let name = document.getElementById('name').value;
	let disc = document.getElementById('desc').value;
	let month = document.getElementById('month').value;
	let week = document.getElementById('week').value;
	let meettype = document.getElementById('meetType').value;

	var formlist = {
		name: name,
		discription: disc,
		month: month,
		week: week,
		meettype: meettype,
	};
	console.log(formlist);
	Data.push(formlist);
	localStorage.setItem('meets', JSON.stringify(Data));


        document.getElementById('name').value=""
document.getElementById('desc').value=""
document.getElementById('month').value=""
document.getElementById('week').value=""
document.getElementById('meetType').value=""
}


