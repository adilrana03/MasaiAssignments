var arr = [1,2,3,4,5];
var res = arr.reduce(function(acc, el){
    return acc*el;
});
console.log(res);