// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit",addtable);


function addtable(){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var batch=document.getElementById("batch").value;
    var dsa=document.getElementById("dsa").value;
    var skills=document.getElementById("cs").value;
    var coding=document.getElementById("coding").value;
    var percentage=(((dsa/10)*100)+((skills/10)*100)+((coding/10)*100))/3;


    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=name;

    var td2=document.createElement("td");
    td2.innerText=batch;

    var td3=document.createElement("td");
    td3.innerText=dsa;
    var td4=document.createElement("td");
    td4.innerText=skills;

    var td5=document.createElement("td");
    td5.innerText=coding;

    var td6=document.createElement("td");
    td6.innerText=percentage;

     var td7=document.createElement("td");
   if(percentage>50){
    td7.innerText="Regular";
    td7.style.backgroundColor="green";
     }else{
        td7.innerText="Async";
        td7.style.backgroundColor="red";
     }

    tr.append(td1, td2, td3, td4, td5, td6, td7)
    document.querySelector("tbody").append(tr);
}

