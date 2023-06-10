document.querySelector("form").addEventListener("submit", addtable);
document.getElementById("noOfStock").innerText= "0" ;
var count =0;
function addtable() {
    event.preventDefault();
    var cname = document.getElementById("compName").value;
    var listedmarket = document.getElementById("listedExchange").value;
    var ind = document.getElementById("industry").value;
    var price = document.getElementById("stockPrice").value;
    var quantity = document.getElementById("quantity").value;
    var type = document.getElementById("type").value;
    var totalprice = quantity * price;
    const date = new Date();

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = cname;

    var td2 = document.createElement("td");
    td2.innerText = listedmarket;

    var td3 = document.createElement("td");
    td3.innerText = ind;

    var td4 = document.createElement("td");
    td4.innerText = price;

    var td5 = document.createElement("td");
    td5.innerText = quantity;

    var td6 = document.createElement("td");
    td6.innerText = type;

    var td7 = document.createElement("td");
    td7.innerText = totalprice;

    var td8 = document.createElement("td");
    td8.innerText = date;

    var td9 = document.createElement("td");
    td9.innerText = "Delete";
    td9.style.backgroundColor = "red";
    td9.addEventListener("click", remove);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.querySelector("tbody").append(tr);


    // count =+ document.getElementById("quantity").value;
    count ++;
    console.log(count);
    document.getElementById("noOfStock").innerText=(count);
}
function remove() {
    event.target.parentNode.remove();
}



// var totalvalue = quantity * price;
// document.getElementById("noOfStock").append(5);
// document.querySelector("span").append(totalval);
