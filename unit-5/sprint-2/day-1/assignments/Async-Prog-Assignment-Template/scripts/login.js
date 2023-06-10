

function myFunction() {
        var pass = document.getElementById("password");
        if (pass.type === "password") {
          pass.type = "text";
        } else {
          pass.type = "password";
        }
      }
      let data=JSON.parse(localStorage.getItem("signup")) || [];
      document.querySelector("form").addEventListener("submit",match);
      function match(elem){
          elem.preventDefault();
          // console.log("a");
          var email=document.getElementById("email").value;
          var password=document.getElementById("password").value;
          console.log(email,password);
          var check=data.filter(function(elem){
              return email==elem.email && password==elem.password;
          })
          console.log(check)
          if(check.length==0){
              alert("wrong credential")
          }else{
              alert("login successfully")
              localStorage.setItem("user",check[0].name)
              window.location.href="index.html"
          }
      }