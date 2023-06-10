// Write All `All Movies`  Page Script Here
// Write All Home  Page Script Here
var movieArr=JSON.parse(localStorage.getItem("movie-list")) || [];

displaytable(movieArr);



function displaytable(data){
var count=0;
document.querySelector("tbody").innerText="";
data.map(function(e,i){
        count++;
        var tr= document.createElement("tr");
        var name= document.createElement("td");
        name.innerText=e.name;
        var mainactor=document.createElement("td");
        mainactor.innerText=e.mainactor;
        var desc=document.createElement("td");
        desc.innerText=e.disc;
        var release=document.createElement("td");
        release.innerText=e.release;
        var category=document.createElement("td");
        category.innerText=e.category;
        var price=document.createElement("td");
        price.innerText=e.price;
        var buy=document.createElement("td");
        buy.innerText="Buy";
        buy.style.backgroundColor="green";
        buy.style.color="white";
        buy.addEventListener("click", function(){
                del(e,i);
                // buylist(e);
        });

        document.getElementById("movie-count").innerText=count;
        tr.append(name, mainactor, desc, release, category, price, buy );
        document.querySelector("tbody").append(tr);
        
        function del(e,index){
                var movies= JSON.parse(localStorage.getItem("buy-list")) || [];
                movies.push(movieArr[index]);
                localStorage.setItem("buy-list", JSON.stringify(movies));
                movieArr.splice(index,1);
                localStorage.setItem("movie-list", JSON.stringify(movieArr));
                displaytable(movieArr);
        }
})
}


document.getElementById("filter").addEventListener('change', filterdata);
function filterdata(){
        var  categorymovie= document.getElementById("filter").value;
        console.log(categorymovie);
     var movie=JSON.parse(localStorage.getItem("movie-list")) || [];
        var filteredmovie = movie.filter(function(e){
                return categorymovie === e.category;
        });
        displaytable(filteredmovie);
}

function moviecount(count){
        document.getElementById("movie-count").innerHTML=count;

}
var towatch= JSON.parse(localStorage.getItem("buy-list")) || [];
function buylist(e){
        towatch.push(e);
        localStorage.setItem("buy-list", JSON.stringify(towatch));
}











