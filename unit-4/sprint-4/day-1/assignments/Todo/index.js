document.querySelector("form").addEventListener("submit", mytodo);
var todoArr = JSON.parse(localStorage.getItem("todoObj")) || [];
displaytodo(todoArr);

function mytodo() {
    event.preventDefault();
    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    var todoobj = { task: task, priority: priority };
    console.log(todoobj);
    todoArr.push(todoobj);
    localStorage.setItem("todoObj", JSON.stringify(todoArr))

    displaytodo(todoArr);
}

function displaytodo(data) {
    document.querySelector("tbody").innerText = "";
    data.map(function (elem, index) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = elem.task;
        var td2 = document.createElement("td");
        td2.innerText = elem.priority;
        if (elem.priority == 'High') {
            td2.setAttribute("id", "high");
        } else {
            td2.setAttribute("id", "low");
        }
        var td3 = document.createElement("td");
        td3.innerHTML = '<i class="fa-solid fa-trash" style="color:red;cursor:pointer"></i>';
        td3.addEventListener("click", removelist);


        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr);
    });
}


function removelist(index) {
    event.target.parentNode.remove();

}
