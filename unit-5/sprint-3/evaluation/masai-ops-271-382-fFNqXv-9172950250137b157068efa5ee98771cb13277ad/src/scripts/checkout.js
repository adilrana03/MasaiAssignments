
var movie=JSON.parse(localStorage.getItem("movie"));

displayMovie(movie);

function displayMovie(movie){
        console.log(movie);
        var div=document.createElement("div");
        div.setAttribute("id", "movie")
        var title=document.createElement("h1");
        title.innerText=movie.Title;
        var img= document.createElement("img");
        img.src=movie.Poster;

        div.append(title,img);
        document.getElementById("cont").append(div);
}

function displayamount(){
        var amount=JSON.parse(localStorage.getItem("amount"));
        document.getElementById("wallet").innerText=amount;
}
displayamount();



function book(){
        console.log("Book works")
        var amount=JSON.parse(localStorage.getItem("amount"));
        console.log(amount);
        var tickets=document.getElementById("number_of_seats").value;
        console.log(tickets);

        var price=100;
        console.log(price);

        var totalPrice=(+tickets)*(+price).toFixed(2);
        console.log(totalPrice);
        if(totalPrice>amount){
                let h1=document.getElementById("booking_status");
                h1.innerText= "Insufficient Balance!";
               
        }else{
                let h1=document.getElementById("booking_status");
                h1.innerText= "booking successfull";
                amount=(amount)-(totalPrice).toFixed(2);
                localStorage.setItem("amount",JSON.stringify(amount));
                displayamount();
        }
}


