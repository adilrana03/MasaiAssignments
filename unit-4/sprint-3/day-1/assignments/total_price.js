var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
}
let arr1 = e_commerce.price;
let arr2 = e_commerce.quantity;
var total = 0;
for(var i=0;i<arr1.length;i++){
     total = total + (arr1[i] * arr2[i]);
}
console.log(total);