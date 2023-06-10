document.querySelector("form").addEventListener("submit", mytodo);


function mytodo() {
    event.preventDefault();
    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    console.log(task, priority);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = task;
    var td2 = document.createElement("td");
    td2.innerText = priority;
    if (priority == 'High') {
        td2.style.backgroundColor = "red";
    } else {
        td2.style.backgroundColor = "green";
    }
    var td3 = document.createElement("td");
    td3.innerHTML = '<i class="fa-solid fa-trash" style="color:red;cursor:pointer"></i>';
    td3.addEventListener("click", removelist);


    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
}

function removelist() {
    event.target.parentNode.remove();

}


