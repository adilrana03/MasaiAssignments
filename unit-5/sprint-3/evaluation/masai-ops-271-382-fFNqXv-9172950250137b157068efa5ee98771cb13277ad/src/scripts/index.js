

let addtoLS=()=>{
        let bal=document.getElementById("amount").value;
        let total=JSON.parse(localStorage.getItem("amount"))||[];
        localStorage.setItem("amount", JSON.stringify(+total+ +bal));
        displaybal();
        document.getElementById("amount").value="";

}
var displaybal=()=>{
        let totalamount=JSON.parse(localStorage.getItem("amount")) || [];
        let money=document.getElementById("wallet");
        money.innerText=totalamount;
}






