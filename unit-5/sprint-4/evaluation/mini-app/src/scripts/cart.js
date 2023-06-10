import {nav} from "./navbar.js";
let navbar=document.getElementById("navbar");
navbar.innerHTML=nav();


let data=JSON.parse(localStorage.getItem("cart")) || [];
console.log(data);
        var count=document.getElementById("cart_count");
        count.innerHTML=data.length;

let displaycart=(data)=>{
        let cont=document.getElementById("items");
        cont.innerHTML="";

        data.forEach((e)=>{
                let div=document.createElement("div");
                div.setAttribute("class","item");
                let price=document.createElement("h3");
                price.setAttribute("class","price")
                price.innerHTML=e.price;
                let btn=document.createElement("button");
                btn.setAttribute("class","remove")
                btn.innerText="Remove"
                btn.addEventListener("click", function(){
                        remove(e);
                })
                let img=document.createElement("img");
                img.src=e.image;
                let title=document.createElement("h3");
                title.innerHTML=e.title;
                let cat=document.createElement("h3");
                cat.innerHTML=e.category;
                let brand=document.createElement("h4");
                brand.innerHTML=e.brand;

                div.append(img,cat,title, brand, price, btn);
                document.getElementById("items").append(div);


        })
}
displaycart(data);


function remove(e){
        data.splice(e,1)
        displaycart(data);
        count=count-1;
        // count();
        localStorage.setItem("cart",JSON.stringify(data));

}
