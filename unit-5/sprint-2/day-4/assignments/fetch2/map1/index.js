let mydate = new Date();
var btn=document.getElementById("btn");
btn.addEventListener("click", fetchData);
function fetchData(){
        console.log("btn working")
        var city=document.getElementById("search");  
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=f17d74ad6ffcb7fa25b9ad388f77c872&units=metric")
        .then(function(response){
                return response.json();
        }).then(function(res){
                displaycity(res)
                console.log(res)
                showPlace(city.value);
        }).catch(function(err){
                console.log(err);
        })
}
function displaycity(data){
        console.log("giusegigsiudgcousdgvuv");
        var container=document.getElementById("show-weather");
        container.innerText="";
        var div1=document.createElement("div");
        div1.setAttribute("class", "title")
        var date=document.createElement("h3");
        date.innerText=mydate.getDate()+" /"+mydate.getMonth()+", "+mydate.getHours()+" : "+ mydate.getMinutes();
        var city=document.createElement("h1");
        city.innerText=data.name;
        var temp=document.createElement("h2");
        temp.innerText=data.main.temp+" °C";
        var tempfeel=document.createElement("h3");
        tempfeel.innerText="Feels like "+data.main.feels_like+" °C"+" Clear";
        var div2=document.createElement("div");
        div2.setAttribute("id","info");
        var p1=document.createElement("p");
        p1.innerText=data.wind.speed+" m/s"
        var p2=document.createElement("p");
        p2.innerText=data.main.pressure+" pa"
        var p3=document.createElement("p");
        p3.innerText="Humidity: "+data.main.humidity+"%"
        var p4=document.createElement("p");
        p4.innerText="Visibility "+data.visibility ;
        div1.append(date,city, temp,tempfeel)
        div2.append(p1,p2,p3,p4)
        container.append(div1,div2);
}

function showPlace(city){
        var map=document.getElementById("gmap_canvas");
        map.src="https://maps.google.com/maps?q="+city+"&t=&z=11&ie=UTF8&iwloc=&output=embed"
        
}
