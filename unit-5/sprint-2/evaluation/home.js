function fetchData(){
        fetch("https://api.openbrewerydb.org/breweries")
        .then(function(res){
                return res.json();
        }).then(function(jsonData){
                        displaytable(jsonData)
        }).catch(function(err){
                console.log("err");
        }) 
}
fetchData();

function displaytable(jsonData){
        jsonData.map(function(elem){
                console.log(jsonData);
                var namediv=document.createElement("div");
                namediv.setAttribute("id", "box");
                let name=document.createElement("h2");
                name.innerText= elem.name;
                var typediv=document.createElement("div");
        
                let type= document.createElement("h3");
                type.innerText= elem.brewery_type;
        
                var citydiv=document.createElement("div");
        
                let city= document.createElement("h3");
                city.innerText= elem.city;
                var statediv=document.createElement("div");
        
                var state= document.createElement("h3");
                state.innerText= elem.state ;
                var btn=document.createElement("button")
                btn.innerText="SHOW MORE";
                btn.addEventListener("click",function(){
                        addto (elem);
                        window.location.href="individual.html"
                })
                namediv.append(name)
                citydiv.append(city)
                statediv.append(state,btn)
                typediv.append(type)
                document.getElementById("cont").append(namediv, typediv,citydiv, statediv);

        })
}
       
function addto(jsonData){
        localStorage.setItem("brew_id",JSON.stringify(jsonData));
}

var filter=document.getElementById("filter");
filter.addEventListener("change", filterbyname)
function filterbyname(){
       fetch(`https://api.openbrewerydb.org/breweries?by_type=${filter.value}`)
       .then(function(res){
        return res.json();
       }).then(function(res){
        displaytable(res);
       })
}







