////////----------  C O N S T R U C T O R    F U N C T I O N  -------/////////////////////
let arr = [];
function movie(name, poster, imdb, actor, date) {
	this.name = name;
	this.poster = poster;
	this.imdb = imdb;
	this.actor = actor;
	this.date = date;
}

let obj1 = new movie(
	'Don 2',
	'https://i.pinimg.com/564x/9f/06/d8/9f06d8e6aaad4b10a731bb1d20f00123.jpg',
	'9',
	'Shahrukh',
	'10 Aug 2012'
);
let obj2 = new movie(
	'Shutter Island',
	'https://i.pinimg.com/564x/45/b1/fe/45b1fe268d7f2c9bae25646c092a8556.jpg',
	'8',
	'Leonardo',
	'20 Oct 2015'
);
let obj3 = new movie(
	'Inception',
	'https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg',
	'7',
	'Shahrukh',
	'5 Nov 2013'
);
let obj4 = new movie(
	'Fight Club',
	'https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg',
	'9',
	'Bradd Pitt',
	'10 Jan 2008'
);
let obj5 = new movie(
	'Phir Hera Pheri',
	'https://i.pinimg.com/564x/7a/17/d7/7a17d716b61da4ccdd300cbbe341027c.jpg',
	'9.8',
	'Akshay Kumar',
	'9 March 2008'
);
let obj6 = new movie(
	'Spider-Man',
	'https://i.pinimg.com/564x/33/58/5c/33585c3e33595e3ab7cdd54f86dc3345.jpg',
	'9',
	'Tom HOlland',
	'20 April 2018'
);
let obj7 = new movie(
	'Doctor Strange',
	'https://i.pinimg.com/564x/9f/06/d8/9f06d8e6aaad4b10a731bb1d20f00123.jpg',
	'4',
	'Benedic Cumberbatch',
	'15 March 2022'
);
let obj8 = new movie(
	'Iron Man',
	'https://i.pinimg.com/564x/45/b1/fe/45b1fe268d7f2c9bae25646c092a8556.jpg',
	'6',
	'Robert Downey Jr',
	'11 Oct 2017'
);
let obj9 = new movie(
	'Thor',
	'https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg',
	'7.1',
	'Chris Hemsworth',
	'2 Feb 2016'
);

arr.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9);
localStorage.setItem('movies', JSON.stringify(arr));

displayArr(arr);

function displayArr(data) {
	var moviesdiv = document.getElementById('movies');
	moviesdiv.innerHTML = '';
	data.map(function (elem, i) {
		var div = document.createElement('div');
		var img1 = document.createElement('img');
		img1.setAttribute('src', elem.poster);
		var h3 = document.createElement('h3');
		h3.innerText = 'IMDB - ' + elem.imdb;
		var h4 = document.createElement('h4');
		h4.innerText = elem.date;
		var h2 = document.createElement('h2');
		h2.innerText = elem.name;
		div.append(img1, h2, h3, h4);
		moviesdiv.append(div);
	});
}

//////////////////////////    Slider Image    //////////////////////////
// var count = 0;
// print(count);

// function print(count) {
// 	var arr = [
// 		"<img src='https://i.pinimg.com/564x/9f/06/d8/9f06d8e6aaad4b10a731bb1d20f00123.jpg'></img>",
// 		"<img src='https://i.pinimg.com/564x/45/b1/fe/45b1fe268d7f2c9bae25646c092a8556.jpg'></img>",
// 		"<img src='https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg'></img>",
// 		"<img src='https://i.pinimg.com/564x/7a/17/d7/7a17d716b61da4ccdd300cbbe341027c.jpg'></img>",
// 		"<img src='https://i.pinimg.com/564x/33/58/5c/33585c3e33595e3ab7cdd54f86dc3345.jpg'></img>",
// 	];

// 	let header = document.getElementById('slideshow'); //image append in this div
// 	header.innerHTML = arr[0];
// 	setInterval(function () {
// 		if (count == arr.length) {
// 			count = 0;
// 		}
// 		header.innerHTML = arr[count];
// 		count++;
// 	}, 2000);
// }






var count =0;

print(count);

function print(count){
	var arr = [
				"<img src='https://i.pinimg.com/564x/9f/06/d8/9f06d8e6aaad4b10a731bb1d20f00123.jpg'></img>",
				"<img src='https://i.pinimg.com/564x/45/b1/fe/45b1fe268d7f2c9bae25646c092a8556.jpg'></img>",
				"<img src='https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg'></img>",
				"<img src='https://i.pinimg.com/564x/7a/17/d7/7a17d716b61da4ccdd300cbbe341027c.jpg'></img>",
				"<img src='https://i.pinimg.com/564x/33/58/5c/33585c3e33595e3ab7cdd54f86dc3345.jpg'></img>",
			];

			let header = document.getElementById("slide");
			hearder.innerHTML= arr[0];

			setInterval( function(){
				if(count = arr.length-1){
					count=0;
				}
				header.innerHTML= arr[count];
				count++;
			},2000);
}

/////////////////      S O R T I N G  F U N C T I O N      ////////////////////
document.getElementById('sorting').addEventListener('change', sortbyimdb());

function sortbyimdb() {
	var pricesort = document.querySelector('#sorting').value;
	if (pricesort === 'l2h') {
		arr.sort(function (a, b) {
			return a.imdb - b.imdb;
		});
		displayArr(arr);
	}
	if (pricesort === 'h2l') {
		arr.sort(function (a, b) {
			return b.imdb - a.imdb;
		});
		displayArr(arr);
	}
}
