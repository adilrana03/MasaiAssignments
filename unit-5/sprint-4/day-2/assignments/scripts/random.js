
import {nav,fetchData} from "../component/nav.js"
let navbar=document.getElementById("navbar");
navbar.innerHTML=nav();

let user= document.getElementById("user-info");
user.innerHTML=localStorage.getItem("user") || "SignUp";

let getData=async() => {
        // let url="www.themealdb.com/api/json/v1/1/random.php";
        let data=await fetchData(`https://www.themealdb.com/api/json/v1/1/random.php`);
        console.log(data);
        var arr=[];
        arr.push(data.meals[0]);
        displayData(arr);
}
getData();

//    let fetchData=()=>{
//         fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//         .then((res)=>res.json())
//         .then((data)=>{
//                 console.log(data.meals);
//                 displayData(data.meals);
//         }).catch(function(err){
//                 console.log("error");
//         });       
// };
// fetchData();

function displayData(data){
        var container=document.getElementById("random");
        container.innerHTML=null;
        data.map(function(elem){
                let div= document.createElement("div");
                div.setAttribute("id", "random-div")
                let img=document.createElement("img");
                img.src=elem.strMealThumb;

                let title=document.createElement("h1");
                title.setAttribute("class", "title");
                title.innerHTML=elem.strMeal;

                let ins=document.createElement("h3");
                ins.setAttribute("class", "ins")
                ins.innerHTML=elem.strInstructions

                div.append(title,img,ins);
                container.append(div);
        })
}
