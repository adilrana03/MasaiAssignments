var arr=["https://s7d1.scene7.com/is/image/mcdonalds/PDP_SmokyBLTDoubleQPC_832x472:1-4-product-tile-desktop",
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-4-product-tile-desktop",
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop"
];
document.getElementById("order").addEventListener("click", showproduct)
var id=0;
function showproduct(){
        event.preventDefault();
        var promise= new Promise(function(res, rej){
                id=setTimeout(function(){
                                res("hi, your order is ready");
                }
                , 3000);
        });
        promise.then(function(){
                var product=document.querySelector('input[type = checkbox]:checked').value;
                console.log(product);
                if(product==="burger"){
                        console.log("Burger",arr[0])
                        document.getElementById("img").innerText="";        
                        // displayburger()
                        displayfood("Burger",arr[1])
                }else if(product==="pepsi"){
                        console.log("pepsi")
                        document.getElementById("img").innerText="";        
                        displayfood("Burger","https://s7d1.scene7.com/is/image/mcdonalds/PDP_SmokyBLTDoubleQPC_832x472:1-4-product-tile-desktop")
                }else if(product==="muffin"){
                        document.getElementById("img").innerText="";        
                        displaymuffin()
                        console.log("muffin")
                }else if(product==="coldcoffee"){
                        document.getElementById("img").innerText="";        
                        // displaycoffee()
                        console.log("coldcofee")
                }else if(product==="fries"){
                        // console.log("fries")
                        document.getElementById("img").innerText="";        
                        displayfries()
                }else if(product==="Roll"){
                        console.log("Rolls")
                        document.getElementById("img").innerText="";        
                        // displayRolls()
                }else{
                        console.log("product not found")
                }  
        }).catch("OOPS, PLEASE SELECT SOME ITEMS ")

}




function displayfood(name, img){
        console.log("imgkgigogwdgcweugougo")
        var div=document.createElement("div");
        var img=document.createElement("img");
        img.setAttribute("class", "food")
        img.setAttribute("src",img );
        var p=document.createElement("h3");
        p.setAttribute("class", "num")
        p.innerText="order id-"+name;
        var h2=document.createElement("h2");
        h2.innerText="YOUR FOOD IS READY!       THANKS :)"
        div.append(h2,img,p);
        document.getElementById("img").append(div); 

}


// function displayburger(){
       
// }
// function displaypep(){
//         var div=document.createElement("div");
//         var img=document.createElement("img");
//         img.setAttribute("src","https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-4-product-tile-desktop" );
//         var p=document.createElement("h3");
//         p.setAttribute("class", "num")
//         p.innerText="order id-"+" PEPSI";
//         var h2=document.createElement("h2");
//         h2.innerText="YOUR FOOD IS READY!       THANKS :)"
//         div.append(h2,img,p);
//         document.getElementById("img").append(div);        
// }
// function displaymuffin(){
//         var div=document.createElement("div");
//         var img=document.createElement("img");
//         img.setAttribute("src","https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop" );
//         var p=document.createElement("h3");
//         p.setAttribute("class", "num")
//         p.innerText="order id-"+" MUFFIN";
//         var h2=document.createElement("h2");
//         h2.innerText="YOUR FOOD IS READY!       THANKS :)"
//         div.append(h2,img,p);
//         document.getElementById("img").append(div);        
// }
// function displaycoffee(){
//         var div=document.createElement("div");
//         var img=document.createElement("img");
//         img.setAttribute("src","https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Premium-Roast-Iced-Coffee-Medium:1-4-product-tile-desktop" );
//         var p=document.createElement("h3");
//         p.setAttribute("class", "num")
//         p.innerText="order id-"+" COLD COFFEE";
//         var h2=document.createElement("h2");
//         h2.innerText="YOUR FOOD IS READY!       THANKS :)"
//         div.append(h2,img,p);
//         document.getElementById("img").append(div);        
// }
// function displayfries(){
//         var div=document.createElement("div");
//         var img=document.createElement("img");
//         img.setAttribute("src","https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop" );
//         var p=document.createElement("h3");
//         p.setAttribute("class", "num")
//         p.innerText="order id-"+" FRIES";
//         var h2=document.createElement("h2");
//         h2.innerText="YOUR FOOD IS READY!       THANKS :)"
//         div.append(h2,img,p);
//         document.getElementById("img").append(div);        
// }
// function displayRolls(){
//         var div=document.createElement("div");
//         var img=document.createElement("img");
//         img.setAttribute("src","https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Burrito-1:1-4-product-tile-desktop" );
//         var p=document.createElement("h3");
//         p.setAttribute("class", "num")
//         p.innerText=" order id-"+" ROLL";
//         var h2=document.createElement("h2");
//         h2.innerText="YOUR FOOD IS READY!       THANKS :)"
//         div.append(h2,img,p);
//         document.getElementById("img").append(div);        
// }
// document.getElementById("img").innerText="";        





