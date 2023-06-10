import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { getData } from "../components/getdata.js";

const id = localStorage.getItem("id");
const blog = async(id)=>{
    let res = await getData(`http://localhost:3000/blogs/${id}`);
    console.log(res);

    document.getElementById("title").value = res.title;
    document.getElementById("body").value = res.body;
    document.getElementById("author").value = res.author;

    document.getElementById("submit").addEventListener("click",async()=>{
        event.preventDefault();
        let blogUpdatedData = {
            title: document.getElementById("title").value,
            body : document.getElementById("body").value,
            author : document.getElementById("author").value,
        }
         let res = await fetch(`http://localhost:3000/blogs/${id}`,{
            method: "PATCH",
            body : JSON.stringify(blogUpdatedData),
            headers : {
                "Content-Type" : "application/json",
            },
         });
         location.href = "../index.html";
    })
}
blog(id)