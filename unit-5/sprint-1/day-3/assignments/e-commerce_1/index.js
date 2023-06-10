let arr = JSON.parse(localStorage.getItem("Products")) || [];
document.querySelector("form").addEventListener("submit", displayData);

function displayData(e) {
e.preventDefault();

let name= document.getElementById("name").value;
let category=document.getElementById("category").value;
let img= document.getElementById("imgurl").value;
let price=document.getElementById("price").value;
let gender=document.getElementById("gen").value;
let sold=document.getElementById("sold").value;

var obj = new submit(name, category, img, price, gender, sold);
arr.push(obj);
localStorage.setItem("Products", JSON.stringify(arr));
}

function submit(name, category, img, price, gender, sold){
this.product_name = name;
this.category = category;
this.img_url = img;
this.price=price;
this.gender=gender;
this.sold=sold;
}
