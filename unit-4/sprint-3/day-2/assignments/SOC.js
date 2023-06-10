var arr = [1,2,3,4,5,6,7,8];
var res = arr.filter(function(el){
    return el%3==0;
}).map(function(el){
    return el**3; 
}).reduce(function(acc,el){
    return acc + el;
},0);
console.log(res);