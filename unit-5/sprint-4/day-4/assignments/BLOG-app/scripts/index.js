import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import {getData} from "../components/getdata.js";

console.log("hello")
const initFun = async()=>{
   let data = await getData(`http://localhost:3000/blogs`);
   append(data);
}
initFun();


getData();
const append = (data)=>{
//    console.log(data);
   data.forEach((el)=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.id;
    let td2 = document.createElement("td");
    td2.innerText = el.title;
    let td3 = document.createElement("td");
    td3.innerText = el.author;
    let td4 = document.createElement("td");
    td4.innerHTML = "<button>View</button>";
    let td5 = document.createElement("td");
    td5.innerHTML = "<button>Edit</button>";
    let td6 = document.createElement("td");
    td6.innerHTML = `<button>Delete</button>`;

    td4.onclick = async()=>{
        location.href = 'pages/view.html';
        localStorage.setItem("id",el.id);
    }

    td5.onclick = async()=>{
        location.href = 'pages/edit.html';
        localStorage.setItem("id",el.id);
    }

    td6.onclick = async()=>{
        await fetch(`http://localhost:3000/blogs/${el.id}`,{
            method : 'DELETE'
        })
    }
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);
   })
}