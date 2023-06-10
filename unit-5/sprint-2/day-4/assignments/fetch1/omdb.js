var btn=document.getElementById("search");
btn.addEventListener("click", fetchData);
function fetchData(){
        var key="ba24d27a"
        var movie=document.getElementById("movie-name").value;
        fetch(`http://www.omdbapi.com/?apikey=${key}&t=${movie}`)
        // fetch("http://www.omdbapi.com/?apikey="+key+"&s="+movie)
        .then(function(res){
                return res.json();
        }).then(function(res){
                if(res.Error){
                displaygif();
                }else{
                        displaymovie(res)
                }
                document.getElementById("movie-name").value="";
        }).catch(function(err){
                console.log(err);
        })
}


function displaymovie(data){
        var container=document.getElementById("show-movie");
        container.innerText="";
        var div1=document.createElement("div");
        var img=document.createElement("img");
        img.src=data.Poster;
        var recommended=document.createElement("h1");
        if(data.imdbRating > 8.5){
        recommended.innerText="* Recommended *"
        };
        var div2=document.createElement("div");
        div2.setAttribute("class", "title")
        var title=document.createElement("h2");
        title.innerText="MOVIE - "+data.Title;
        var rdate=document.createElement("h2");
        rdate.innerText="RELEASED - "+data.Released;
        var rating= document.createElement("h2");
        rating.innerText="IMDB - "+data.imdbRating;
        var genre=document.createElement("h2");
        genre.innerText="GENRE - "+data.Genre;
        div1.append(img,recommended);
        div2.append(title,genre,rating,rdate)
        container.append(div1,div2);
}
function displaygif(data){
        var container=document.getElementById("show-movie");
        container.innerText="";
        var div=document.createElement("div");
        var img=document.createElement("img");
        img.style.width="600px";
        img.style.height="400px"
        img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYHG2F_nresGJ80_l24n9yQSIz5UexZSEnw&usqp=CAU")
        div.append(img);
        container.append(div);
}

var count = 0;
print(count);

function print(count) {
var arr = [
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/6088/1000216088/1000216088-h'></img>",
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6'></img>",
"<img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-10-15/BookingcomDesktop-75790037-fac2-48cd-bf3f-2cf515f40011.jpg'></img>",
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8863/1348863-h-0d3a2927b302'></img>",
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1611/1411611-h-e5f378ad6d20'></img>",
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6'></img>",
"<img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1606/1411606-h-a48b016d9dec'></img>",
];

let header = document.getElementById("banner"); //image append in this div
header.innerHTML = arr[0];
setInterval(function () {
if (count == arr.length) {
count = 0;
}
header.innerHTML = arr[count];
count++;
}, 2500);
}