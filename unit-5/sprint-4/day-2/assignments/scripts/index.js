import {nav,fetchData} from "../component/nav.js"
let navbar=document.getElementById("navbar");
navbar.innerHTML=nav();


let user= document.getElementById("user-info");
user.innerHTML=localStorage.getItem("user") || "SignUp";


let getData=async() => {
        let input=document.getElementById("input").value;
        let data=await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        let meal=data.meals
        console.log(meal);
        displayData(meal)
}

//    let fetchData=()=>{
//         let input=document.getElementById("input").value;
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//                 console.log(data.meals);
//                 displayData(data.meals);
//         }).catch(function(err){
//                 console.log("er");
//         });       
// };

function displayData(data){
        var container=document.getElementById("recipes");
        container.innerHTML=null;
        data.map(function(elem){
                let div= document.createElement("div");
                div.setAttribute("id", "img-div")
                let img=document.createElement("img");
                img.src=elem.strMealThumb;
                let title=document.createElement("h1");
                title.innerHTML=elem.strMeal;
                let btn=document.createElement("button");
                btn.setAttribute("class", "div-btn")
                btn.innerHTML="Show More"
                btn.addEventListener("click", function(){
                        showmore(elem);
                })
                div.append(title,img,btn);
                container.append(div);
        })
}
function showmore(elem){
        localStorage.setItem("info",JSON.stringify(elem));
        window.location.href="individual.html";
        console.log(elem);
}

var id;
function debounce(func, delay){
        if(id){
                clearTimeout(id);
        }
        id=setTimeout(function(){
                func();
        },delay)
}
export {debounce, getData};
