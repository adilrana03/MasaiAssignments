var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
]; 

    //    products name and rating
for(var i=0; i<amazon.length; i++){
    console.log(amazon[i].name+"-"+amazon[i].rating)
}


// Average Rating
var sum=0;
for(var i=0; i<amazon.length; i++){
    sum+=amazon[i].rating;
}
console.log("Average Rating " +sum/amazon.length);

//      product having minimum price
var min=1000000;
for(var i=0; i<amazon.length; i++){
    if(amazon[i].price<min){
        min=amazon[i].price;
    }
}
console.log("Minimum Price "+ min);