// Write All `My Movies`  Page Script Here
var mymovies=JSON.parse(localStorage.getItem("buy-list")) || [];
display(mymovies);
function display(data){
        document.querySelector("tbody").innerHTML=null;
        data.map(function(elem){
                var tr= document.createElement("tr");
                var name= document.createElement("td");
                name.innerText=elem.name;
                var mainactor=document.createElement("td");
                mainactor.innerText=elem.mainactor;
                var desc=document.createElement("td");
                desc.innerText=elem.disc;
                var release=document.createElement("td");
                release.innerText=elem.release;
                var category=document.createElement("td");
                category.innerText=elem.category;
                var price=document.createElement("td");
                price.innerText=elem.price;

                tr.append(name, mainactor, desc, release, category, price);
                document.querySelector("tbody").append(tr);
        }) 
}