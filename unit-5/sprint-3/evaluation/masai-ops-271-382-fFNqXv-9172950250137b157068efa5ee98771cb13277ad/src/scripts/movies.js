
function fetchData(){
        var searchquery=document.getElementById("search").value;
        var url=`https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=ba24d27a`
        fetch(url)
        .then(function(res){
                return res.json();
        }).then(function(data){
                console.log(data);
                displayData(data.Search);
        }).catch(function(err){
                console.log("error");
        });       
};
// fetchData();

function displayData(data){
        var div=document.getElementById("movies");
        div.innerHTML=null;
        data.map(function(elem){

                let div2= document.createElement("div");
                // div.setAttribute("id", "movies");
                div2.setAttribute("class", "movie_tab")
                let img=document.createElement("img");
                img.src=elem.Poster
                let title=document.createElement("h2");
                title.innerHTML=elem.Title;
                var btn=document.createElement("button");
                btn.innerHTML="Book Now";
                btn.setAttribute("class","book_now");
                btn.addEventListener("click", function(){
                       addto(elem);
                        window.location.href="checkout.html";
                })

                div2.append(title,img, btn);
                div.append(div2);
        })
}

function addto(data){
        localStorage.setItem("movie", JSON.stringify(data));
}
var amount=JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=amount;



var id;
function debounce(func, delay){
        if(id){
                clearTimeout(id);
        }
        id=setTimeout(function(){
                func();
        },delay)
}




