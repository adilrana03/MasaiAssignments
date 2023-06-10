var arr = [1,2,3,4,5];
var res = arr.filter(function(el){
    return el%2!=0;
}).reduce(function(acc, el){
    return acc + el; 
});
console.log(res);