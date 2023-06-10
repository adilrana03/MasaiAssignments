        function GetInfo() {
 
          var city = document.getElementById("cityInput");
      
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=f17d74ad6ffcb7fa25b9ad388f77c872`)
      .then(response => response.json())
      .then(data => {
      console.log(data)
          //Getting the min and max values for each day
          var cityName = document.getElementById("cityName");
          cityName.innerHTML = data.city.name;


          for(i = 0; i<7; i++){
              document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
              //Number(1.3450001).toFixed(2); // 1.35
          }
      
          for(i = 0; i<7; i++){
              document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
          }
          //Getting Weather Icons
           for(i = 0; i<7; i++){
              document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
              data.list[i].weather[0].icon
              +".png";
          }
          //------------------------------------------------------------
          console.log(data)
      })
      .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
      }
      