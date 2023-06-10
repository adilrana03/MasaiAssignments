
document.querySelector("form").addEventListener("submit", addmovie);

var movieArr= JSON.parse(localStorage.getItem("movie-list")) || [];
function addmovie(){
        event.preventDefault();
        alert("Movie is added to your list");
        var movieobj={
                 name: document.getElementById("name").value,
                 mainactor: document.getElementById("mainActor").value,
                 disc:  document.getElementById("desc").value,
                 release: document.getElementById("release").value,
                 category: document.querySelector("#category").value,
                 price: document.getElementById("price").value,
        };
        movieArr.push(movieobj);
        localStorage.setItem("movie-list", JSON.stringify(movieArr));
        document.getElementById("name").value;
        document.getElementById("mainActor").value;
        document.getElementById("desc").value;
        document.getElementById("release").value;
        document.getElementById("category").value;
        document.getElementById("price").value;
        
}

















// document.querySelector("form").addEventListener("submit", show);

// var movieinfo=JSON.parse(localStorage.getItem("movielist")) || [];
// displaytable(movieinfo);
// function show(){
//         event.preventDefault();
//         var name=document.getElementById("name").value;
//         var actor=document.getElementById("mainActor").value;
//         var discription=document.getElementById("desc").value;
//         var  date=document.getElementById("release").value;
//         var value=document.querySelector("#category").value;
//         var price=document.getElementById("price").value;
//         var movielist={
//                 name: name, 
//                 actor:actor,
//                 discription:discription,
//                 date:date,
//                 value:value,
//                 price:price,

//         };
//         console.log(movielist);
//         movieinfo.push(movielist);
//         localStorage.setItem("movielist", JSON.stringify(movieinfo));
//         displaytable(movieinfo);
// }

// function displaytable(data){
//         document.querySelector("tbody").innerText="";

//         data.map(function(elem,index){
//                 var tr=document.createElement("tr");
//                 var td1=document.createElement("td");
//                td1.innerText=elem.name;
//                var td2=document.createElement("td");
//                td2.innerText=elem.actor;
//                var td3=document.createElement("td");
//                td3.innerText=elem.discription;
//                var td4=document.createElement("td");
//                td4.innerText=elem.date;
//                var td5=document.createElement("td");
//                td5.innerText=elem.value;
//                var td6=document.createElement("td");
//                td6.innerText=elem.price;
//                var td7=document.createElement("td");
//                td7.innerText="delete";
//                tr.append(td1, td2, td3 , td4, td5, td6, td7);
               
//                document.querySelector("tbody").append(tr);
               
//         });
// }




