import {nav} from "./navbar.js";
let navbarcontainer=document.getElementById("navbar");
navbarcontainer.innerHTML=nav();


var page =1;
const getData = async (i) => {
    // code here
   console.log(i);
   document.getElementById("page_number").innerText=i;
    try{
      var res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${i}&limit=6`);
      var data = await res.json();
       console.log(data);
       displayData(data.data);
    }
    catch(error){
      return "something went wrong";
    }
  };
 getData(page);
 let product=[];
 let count=0;
let displayData=(item)=>{
    let container = document.getElementById("main_items");
    container.innerHTML=null;

    item.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class","item");
        let img = document.createElement("img");
         img.src = element.image;
         let cate = document.createElement("h5");
         cate.innerText = element.category;
         let name = document.createElement("h2");
         name.innerText = element.title;
         let brand = document.createElement("h5");
         brand.innerText = element.brand;
         let price = document.createElement("h2");
         price.innerText = element.price;
         price.setAttribute("class","price");
         let btn = document.createElement("button");
         btn.innerText="Add to Cart";
         btn.setAttribute("class","add_to_cart");
         btn.addEventListener("click",()=>{
            event.preventDefault();
            product.push(element);
            count++;
            document.getElementById("cart_count").innerText=count;
            localStorage.setItem("cart",JSON.stringify(product));
            
         })

         div.append(img,cate,name,brand,price,btn);
         container.append(div);
        
    });
}


//Pagination
let prevbtn = document.getElementById("previous");
let nextbtn = document.getElementById("next");
if(page==1){
    prevbtn.disabled=true;
}
prevbtn.addEventListener("click",function(){
    if(page==2){
        getData(--page);
        prevbtn.disabled=true;
    }
    else{
        getData(--page);
        prevbtn.disabled=false;
    }
 
});
nextbtn.addEventListener("click",function(){
    getData(++page);
    prevbtn.disabled=false;
})