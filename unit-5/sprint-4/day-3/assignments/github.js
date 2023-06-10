let button = document.getElementById("search_btn");
let  search = document.getElementById("search");

let getdata= async() => {
    let response =await fetch(`https://api.github.com/users/${search.value}`);
    let data = await response.json();
    console.log(data);
    displayData(data);
}

button.addEventListener("click",getdata); 
let displayData = ({name,bio,avatar_url,followers,following,company}) =>{
    document.getElementById("cont").innerHTML=null;
    let h1 = document.createElement("h1");
    h1.textContent = name;
    let h3 = document.createElement("h3");
    h3.textContent = bio;
    let img = document.createElement("img");
    img.src = avatar_url;
    let p_follower = document.createElement("p");
    p_follower.textContent = "FOLLOWERS- "+followers;
    let p_following = document.createElement("p");
    p_following.textContent = "FOLLOWING- "+following;
    let com = document.createElement("p")
    com.textContent = company;
    document.getElementById("cont").append(img,h1,h3,p_follower,p_following,com);

}